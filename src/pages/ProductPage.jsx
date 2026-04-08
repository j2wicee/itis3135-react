import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function ProductPage() {
  useDocumentTitle("Product ~ ITIS 3135");
  return (
    <>
      <h2>Capable Mouse Product Showcase</h2>

      <section className="products-container">
        <div className="product-card">
          <img src="/images/cheese_cpu.png" alt="Cheese CPU" />
          <h3>Cheese CPU</h3>
          <p>A cheese-powered processor for tiny machines.</p>
          <p className="price">$49.99</p>
        </div>

        <div className="product-card">
          <img src="/images/mouse_laptop.png" alt="Nano Laptop" />
          <h3>Nano Coding Laptop</h3>
          <p>A miniature laptop built for coding on the go.</p>
          <p className="price">$199.99</p>
        </div>

        <div className="product-card">
          <img src="/images/crumb_tracker.png" alt="Wireless Crumb Tracker" />
          <h3>Wireless Crumb Tracker</h3>
          <p>Find crumbs anywhere with wireless tracking technology.</p>
          <p className="price">$29.99</p>
        </div>
      </section>
    </>
  );
}
