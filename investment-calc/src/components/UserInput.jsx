export default function UserInput({ onInputChange, dataInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            step="1"
            value={dataInput.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            step="1"
            value={dataInput.annualInvestment}
            onChange={(event) =>
              onInputChange("annualIvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="text"
            required
            value={dataInput.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="text"
            required
            value={dataInput.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
