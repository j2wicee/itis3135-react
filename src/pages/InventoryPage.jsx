import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const INITIAL_ROWS = [
  ["Cheese Powered CPU", "Hardware", "4"],
  ["Nano Coding Laptop", "Computers", "2"],
  ["Debugging Toolkit", "Tools", "7"],
  ["Wireless Crumb Tracker", "Devices", "3"],
  ["AI Cheese Analyzer", "AI Equipment", "1"],
];

export function InventoryPage() {
  useDocumentTitle("Inventory ~ ITIS 3135");
  const [rows, setRows] = useState(() =>
    INITIAL_ROWS.map(([item, category, quantity], i) => ({
      id: `seed-${i}`,
      item,
      category,
      quantity,
    })),
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form["item-name"].value;
    const type = form["item-type"].value;
    const quantity = form.quantity.value;
    setRows((r) => [
      ...r,
      {
        id: crypto.randomUUID(),
        item: name,
        category: type,
        quantity,
      },
    ]);
    form.reset();
  }

  return (
    <>
      <h2>Capable Mouse Workshop Inventory</h2>

      <section className="inventory-form">
        <h3>Add New Item</h3>

        <form onSubmit={handleSubmit}>
          <label htmlFor="item-name">Item Name:</label>
          <input type="text" id="item-name" name="item-name" required />

          <label htmlFor="item-type">Category:</label>
          <input type="text" id="item-type" name="item-type" />

          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" />

          <button type="submit" className="btn">
            Add Item
          </button>
        </form>
      </section>

      <section className="inventory-list">
        <h3>Current Inventory</h3>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody id="inventory-table">
            {rows.map((row) => (
              <tr key={row.id}>
                <td>{row.item}</td>
                <td>{row.category}</td>
                <td>{row.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
