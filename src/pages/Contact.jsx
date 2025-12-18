function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>

      <form>
        <input type="text" placeholder="Name" />
        <br /><br />

        <input type="email" placeholder="Email" />
        <br /><br />

        <textarea placeholder="Message"></textarea>
        <br /><br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;