export default function Calculator() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" step="1" />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" step="1" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="text" />
        </p>
        <p>
          <label>Duration</label>
          <input type="text" />
        </p>
      </div>
    </section>
  );
}
