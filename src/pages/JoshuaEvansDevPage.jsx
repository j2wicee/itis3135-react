import { useDocumentTitle } from "../hooks/useDocumentTitle";
import "./JoshuaEvansDevPage.css";

export function JoshuaEvansDevPage() {
  useDocumentTitle("Joshua Evans Development");
  return (
    <div className="jed-page">
      <header>
        <img
          src="https://openclipart.org/image/200px/354841"
          alt="Company Logo"
        />
        <h1>Joshua Evans Development</h1>
      </header>

      <main>
        <h2>Home</h2>

        <p>
          Joshua Evans Development is a company that focuses on creating fully
          responsive, stunning, and creative designs for each of our clients.
        </p>

        <ul>
          <li>Creative, Responsive Designs</li>
          <li>Stunning UI/UX</li>
          <li>Accessible To All</li>
          <li>Mobile-Friendly</li>
          <li>Client-focused Design Strategy</li>
        </ul>

        <p>
          We work hand in hand with all of our clients to ensure all of their
          needs are met. We respond to our clients within a 24 hour window,
          guaranteeing deadlines are met without fail.
        </p>

        <section>
          <h3>Contact Information</h3>
          <p>
            <strong>Phone:</strong> (910) 412-3312 <br />
            <strong>Email:</strong> contact@joshuaevans.com <br />
            <strong>Address:</strong> 9110 University City Blvd, Charlotte, NC
            28262
          </p>
        </section>
      </main>

      <footer>
        <p>Page created by Joshua Evans Development</p>
      </footer>
    </div>
  );
}
