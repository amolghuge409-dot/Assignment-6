import React from "react";

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function StudentDetails({ student }) {
  return (
    <section className="panel preview-panel" aria-labelledby="preview-title">
      <div className="panel-heading">
        <div>
          <span className="section-kicker">LIVE PREVIEW</span>
          <h2 id="preview-title">Student card</h2>
        </div>
        <span className={`status-pill${student ? " status-ready" : ""}`}>
          <span className="status-dot" />
          {student ? "READY" : "AWAITING"}
        </span>
      </div>

      {student ? (
        <article className="student-card" aria-label={`Details for ${student.name}`}>
          <div className="card-topline">
            <span className="card-label">STUDENT PROFILE</span>
            <span className="card-number">NO. 01</span>
          </div>
          <div className="student-identity">
            <div className="avatar" aria-hidden="true">{getInitials(student.name)}</div>
            <div className="identity-copy">
              <span className="identity-label">FULL NAME</span>
              <h3>{student.name}</h3>
            </div>
          </div>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">ROLL NUMBER</span>
              <span className="detail-value">{student.rollNumber}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">DEPARTMENT</span>
              <span className="detail-value">{student.department}</span>
            </div>
          </div>
          <div className="marks-block">
            <div className="marks-heading">
              <span className="detail-label">MARKS OBTAINED</span>
              <span className="marks-score">{student.marks}<span> / 100</span></span>
            </div>
            <div
              className="marks-track"
              role="progressbar"
              aria-label="Marks percentage"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={student.marks}
            >
              <span className="marks-fill" style={{ width: `${student.marks}%` }} />
            </div>
          </div>
          <div className="card-footer">
            <span>CAMPUSCARD <span className="footer-accent">/ STUDENT</span></span>
            <span className="card-seal" aria-hidden="true">S</span>
          </div>
        </article>
      ) : (
        <div className="empty-state">
          <div className="empty-illustration" aria-hidden="true">
            <span className="illustration-card">
              <span />
              <span />
              <span />
            </span>
            <span className="illustration-spark">+</span>
          </div>
          <h3>Your preview is waiting</h3>
          <p>Fill in the form and your student's information will show up here.</p>
        </div>
      )}

      <p className="privacy-note">
        <span className="privacy-icon" aria-hidden="true">i</span>
        This preview is stored only in this browser session.
      </p>
    </section>
  );
}
