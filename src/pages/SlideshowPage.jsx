import { useState, useEffect, useRef, useCallback } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const INTERVAL_MS = 5000;

export function SlideshowPage() {
  useDocumentTitle("Cat Slideshow");

  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch images");
        return res.json();
      })
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setPlaying(false);
  }, []);

  const advanceIndex = useCallback((current, total) => {
    if (current >= total - 1) {
      return null; // signals end reached
    }
    return current + 1;
  }, []);

  useEffect(() => {
    if (!playing || images.length === 0) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        const next = advanceIndex(prev, images.length);
        if (next === null) {
          stopTimer();
          return images.length - 1;
        }
        return next;
      });
    }, INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, images.length, advanceIndex, stopTimer]);

  const handleFirst = () => {
    stopTimer();
    setIndex(0);
  };

  const handlePrev = () => {
    stopTimer();
    setIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    stopTimer();
    setIndex((prev) => Math.min(images.length - 1, prev + 1));
  };

  const handleEnd = () => {
    stopTimer();
    setIndex(images.length - 1);
  };

  const handlePlay = () => {
    if (index >= images.length - 1) setIndex(0);
    setPlaying(true);
  };

  const handleStop = () => stopTimer();

  if (loading) return <main><p>Loading cat images...</p></main>;
  if (error) return <main><p>Error: {error}</p></main>;
  if (images.length === 0) return <main><p>No images found.</p></main>;

  const current = images[index];

  return (
    <main>
      <h2>Cat Slideshow</h2>
      <p>
        Image {index + 1} of {images.length}
      </p>

      <div className="slideshow-frame">
        <img
          key={current.id}
          src={current.url}
          alt={`Cat ${index + 1}`}
          className="slideshow-image"
        />
      </div>

      <div className="slideshow-controls">
        <button onClick={handleFirst} disabled={index === 0}>
          First
        </button>
        <button onClick={handlePrev} disabled={index === 0}>
          Previous
        </button>
        <button onClick={handlePlay} disabled={playing}>
          Play
        </button>
        <button onClick={handleStop} disabled={!playing}>
          Stop
        </button>
        <button onClick={handleNext} disabled={index === images.length - 1}>
          Next
        </button>
        <button onClick={handleEnd} disabled={index === images.length - 1}>
          End
        </button>
      </div>

      <style>{`
        .slideshow-frame {
          width: 100%;
          max-width: 600px;
          height: 400px;
          margin: 1rem auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #111;
          border-radius: 8px;
          overflow: hidden;
        }
        .slideshow-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .slideshow-controls {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .slideshow-controls button {
          padding: 0.5rem 1rem;
          font-size: 0.95rem;
          cursor: pointer;
          border-radius: 4px;
          border: 1px solid #555;
          background: #222;
          color: #fff;
        }
        .slideshow-controls button:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .slideshow-controls button:not(:disabled):hover {
          background: #444;
        }
      `}</style>
    </main>
  );
}
