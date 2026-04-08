import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function CardsPage() {
  useDocumentTitle("Cards ~ ITIS 3135");
  return (
    <>
      <h2>Cards</h2>
      <div className="cards-container">
        <div className="card">
          <img src="/images/cheese_cpu.png" alt="Cheese CPU" />
          <h3>Cheese CPU</h3>
          <p>
            A revolutionary processor that converts cheese energy into computing
            power. Designed by Capable Mouse to keep tiny machines running
            efficiently.
          </p>
        </div>
        <div className="card">
          <img src="/images/mouse_laptop.png" alt="Mouse Laptop" />
          <h3>Nano Coding Laptop</h3>
          <p>
            A miniature laptop perfectly sized for a mouse engineer. Built for
            writing code, debugging programs, and managing inventions on the go.
          </p>
        </div>
        <div className="card">
          <img src="/images/debugging.png" alt="Debugging Toolkit" />
          <h3>Debugging Toolkit</h3>
          <p>
            A specialized toolkit used to hunt down bugs in both hardware and
            software. Essential for keeping every invention in the workshop
            running smoothly.
          </p>
        </div>
        <div className="card">
          <img src="/images/crumb_tracker.png" alt="Wireless Crumb Tracker" />
          <h3>Wireless Crumb Tracker</h3>
          <p>
            A clever tracking device that detects and maps nearby crumbs using
            wireless signals. Perfect for locating snacks and lost resources.
          </p>
        </div>
        <div className="card">
          <img src="/images/mouse_lab.png" alt="AI Cheese Analyzer" />
          <h3>AI Cheese Analyzer</h3>
          <p>
            An advanced AI system that analyzes different cheeses to determine
            their energy potential. Helps Capable Mouse choose the best fuel for
            new inventions.
          </p>
        </div>
      </div>
    </>
  );
}
