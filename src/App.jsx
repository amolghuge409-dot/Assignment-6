import React, { useState } from "react";
import StudentDetails from "./components/StudentDetails.jsx";
import StudentForm from "./components/StudentForm.jsx";

export default function App() {
  const [student, setStudent] = useState(null);

  function handleSubmit(details) {
    setStudent(details);
  }

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Student Information home">
          <span className="brand-mark" aria-hidden="true">
            S
          </span>
          <span>Campus<span className="brand-light">Card</span></span>
        </a>
        <span className="assignment-tag">REACT PRACTICE <span>·</span> ASSIGNMENT 06</span>
      </header>

      <section className="intro" aria-labelledby="page-title">
        <p className="eyebrow"><span className="eyebrow-line" />STUDENT RECORDS</p>
        <h1 id="page-title">Student information,<br /><span>made simple.</span></h1>
        <p className="intro-copy">
          Enter a student's details and instantly preview a neatly formatted student card.
        </p>
      </section>

      <section className="workspace" aria-label="Student information form and preview">
        <StudentForm onSubmit={handleSubmit} />
        <StudentDetails student={student} />
      </section>

      <footer className="page-footer">
        <span>BUILT WITH REACT</span>
        <span className="footer-dot" aria-hidden="true" />
        <span>Student Information App</span>
      </footer>
    </main>
  );
}
