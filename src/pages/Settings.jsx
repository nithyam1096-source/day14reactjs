function Settings() {
  return (
    <div>
      <h1>Settings Page</h1>

      <p>Change your preferences below:</p>

      <form>
        <label>
          <input type="checkbox" /> Enable Notifications
        </label>
        <br /><br />

        <label>
          <input type="checkbox" /> Dark Mode
        </label>
        <br /><br />

        <button>Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;