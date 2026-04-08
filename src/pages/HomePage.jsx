import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function HomePage() {
  useDocumentTitle("Joshua Evans's Capable Mouse ~ ITIS 3135 | Course Home");
  return (
    <>
      <h2>Course Home</h2>
      <p>Structure and organization of the course content.</p>
    </>
  );
}
