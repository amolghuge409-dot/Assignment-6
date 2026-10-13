import React, { useState } from "react";

const initialValues = {
  name: "",
  rollNumber: "",
  department: "",
  marks: "",
};

export default function StudentForm({ onSubmit }) {
  const [values, setValues] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      ...values,
      name: values.name.trim(),
      rollNumber: values.rollNumber.trim(),
      department: values.department.trim(),
      marks: Number(values.marks),
    });
  }

  return (
    <section className="panel form-panel" aria-labelledby="form-title">
      <div className="panel-heading">
        <div>
          <span className="section-kicker">NEW ENTRY</span>
          <h2 id="form-title">Student details</h2>
        </div>
        <span className="step-indicator">01 <span>/ 02</span></span>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Full name</span>
          <input
            autoComplete="name"
            name="name"
            onChange={handleChange}
            placeholder="e.g. Aisha Sharma"
            required
            value={values.name}
          />
        </label>

        <label className="field">
          <span>Roll number</span>
          <input
            name="rollNumber"
            onChange={handleChange}
            placeholder="e.g. CS-2024-018"
            required
            value={values.rollNumber}
          />
        </label>

        <label className="field">
          <span>Department</span>
          <input
            name="department"
            onChange={handleChange}
            placeholder="e.g. Computer Science"
            required
            value={values.department}
          />
        </label>

        <label className="field">
          <span>Marks <span className="field-hint">(out of 100)</span></span>
          <input
            inputMode="numeric"
            max="100"
            min="0"
            name="marks"
            onChange={handleChange}
            placeholder="e.g. 87"
            required
            type="number"
            value={values.marks}
          />
        </label>

        <button className="submit-button" type="submit">
          <span>Create student card</span>
          <span className="button-arrow" aria-hidden="true">→</span>
        </button>
        <p className="form-note">Your entry will appear in the preview instantly.</p>
      </form>
    </section>
  );
}
