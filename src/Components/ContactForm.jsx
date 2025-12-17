import { useState } from "react";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required");
    } else if (!emailRegex.test(form.email)) {
      setError("Invalid email format");
    } else {
      setError("");
      alert("Message Sent");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Contact Form</h3>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange} />

      <button type="submit">Send</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};