import { Link } from "react-router-dom";
import { CRAPPY_PAGE_TO } from "../routes";

export function SiteHeader() {
  return (
    <header>
      <h1>{"Joshua Evans' Capable Mouse ~ ITIS 3135"}</h1>
      <nav aria-label="Primary Navigation Bar">
        <Link to="/">Home</Link>
        <Link to="/contract">Contract</Link>
        <Link to="/survey">Survey</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/documentation">Documentation</Link>
        <Link to="/product">Products</Link>
        <Link to="/website_evaluations">Website Evaluations</Link>
        <Link to="/intro_form">Introduction Form</Link>
        <Link to="/project_overview">Project Overview</Link>
      </nav>

      <nav aria-label="Secondary Navigation Bar">
        <Link to={CRAPPY_PAGE_TO}>Crappy Page</Link>
      </nav>
    </header>
  );
}
