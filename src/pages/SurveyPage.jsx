import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function SurveyPage() {
  useDocumentTitle("Survey ~ ITIS 3135");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <h2>Capable Mouse Fan Survey</h2>

      <form id="capable-mouse-survey" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="product">Favorite Capable Mouse Gadget:</label>
        <select id="product" name="product" required defaultValue="">
          <option value="">Select one</option>
          <option value="cheese-cpu">Cheese CPU</option>
          <option value="nano-laptop">Nano Coding Laptop</option>
          <option value="crumb-tracker">Wireless Crumb Tracker</option>
          <option value="ai-cheese-analyzer">AI Cheese Analyzer</option>
        </select>

        <fieldset>
          <legend>Preferred Cheese for Gadgets:</legend>
          <label>
            <input type="radio" name="cheese" value="cheddar" required />
            Cheddar
          </label>
          <label>
            <input type="radio" name="cheese" value="gouda" /> Gouda
          </label>
          <label>
            <input type="radio" name="cheese" value="swiss" /> Swiss
          </label>
        </fieldset>

        <fieldset>
          <legend>Which gadgets would you like to see improved?</legend>
          <label>
            <input type="checkbox" name="improvements" value="cpu" /> Cheese
            CPU
          </label>
          <label>
            <input type="checkbox" name="improvements" value="laptop" /> Nano
            Laptop
          </label>
          <label>
            <input type="checkbox" name="improvements" value="tracker" /> Crumb
            Tracker
          </label>
          <label>
            <input type="checkbox" name="improvements" value="analyzer" /> AI
            Cheese Analyzer
          </label>
        </fieldset>

        <label htmlFor="comments">Additional Comments:</label>
        <textarea
          id="comments"
          name="comments"
          placeholder="Share your thoughts..."
        />

        <button type="submit">Submit Survey</button>
      </form>
    </>
  );
}
