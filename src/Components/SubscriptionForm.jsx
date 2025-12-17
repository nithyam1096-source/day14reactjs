import { useState } from "react";

export const SubscriptionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Subscribed Successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Subscription Form</h3>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
        />
        Agree to Terms
      </label>

      <br />

      <button type="submit" disabled={!agree}>
        Subscribe
      </button>
    </form>
  );
};