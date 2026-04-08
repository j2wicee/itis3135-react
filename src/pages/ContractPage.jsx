import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function ContractPage() {
  useDocumentTitle("Joshua Evans's Capable Mouse ~ ITIS 3135 | Contract");
  return (
    <>
      <h2>Contract</h2>
      <p>
        I, Joshua M. Evans agree to abide by the terms of the course contract in
        my Spring 2026, ITIS 3135, Front-End Web Application Development with my
        instructor, Professor D.I. von Briesen. <br />
        I understand that all work that I do on publicly available online tools
        will be available to the world, and will not put information there that
        is inappropriate for schoolwork, or that I wish to keep private. <br />I
        also understand that it is my work that counts for attendance, not
        logins or showing up for class. As such, failure to turn in assignments
        may show as absences. <br />I also understand that given the structure
        and content of this class it’s possible to find many examples online or
        even view my classmates’ code directly. <br />
        I swear that I will only use these resources to learn, and will not cut
        and paste code except where I have properly given credit (i.e. external
        libraries) and never from my classmates.
        <br />
        <br />
        <em>Signed: Joshua M. Evans , 19/01/2026</em>
      </p>
    </>
  );
}
