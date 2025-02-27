import PropTypes from "prop-types";

const Question = ({ formData, qNum, onChange }) => {
  return (
    <div className="question-container">
      {qNum === 0 && (
        <div className="question-one question-options">
          <div className="input-container">
            <label htmlFor="username">Enter your name: </label>
            <input
              id="username"
              onChange={onChange}
              type="text"
              name="name"
              value={formData.name}
            />
          </div>
          <div className="input-container">
            <label htmlFor="useremail">Enter your email: </label>
            <input
              id="useremail"
              onChange={onChange}
              type="email"
              name="email"
              placeholder="hello123@gmail.com"
              value={formData.email}
            />
          </div>
        </div>
      )}
      {qNum === 1 && (
        <div className="question-two question-options">
          <input
            className="hidden radio-label"
            type="radio"
            name="frequency"
            id="always-button"
            value="always"
            onChange={onChange}
            checked={formData.frequency === "always"}
          />
          <label className="button-label" htmlFor="always-button">
            <p>Always</p>
          </label>
          <input
            className="hidden radio-label"
            type="radio"
            name="frequency"
            id="sometimes-button"
            value="sometimes"
            onChange={onChange}
            checked={formData.frequency === "sometimes"}
          />
          <label className="button-label" htmlFor="sometimes-button">
            <p>Sometimes</p>
          </label>
          <input
            className="hidden radio-label"
            type="radio"
            name="frequency"
            id="never-button"
            value="never"
            onChange={onChange}
            checked={formData.frequency === "never"}
          />
          <label className="button-label" htmlFor="never-button">
            <p>Never</p>
          </label>
        </div>
      )}
      {qNum === 2 && (
        <div className="question-three question-options">
          <input
            id="range-bar"
            type="range"
            name="level"
            min="0"
            max="100"
            onChange={onChange}
            value={formData.level}
          />
          <label id="range-value" htmlFor="range-bar">
            {formData.level}
          </label>
        </div>
      )}

      {qNum === 3 && (
        <div className="question-four question-options">
          <label htmlFor="ways-to-deal"></label>
          <select
            onChange={onChange}
            name="waysToDeal"
            id="ways-to-deal"
            value={formData.waysToDeal}
          >
            <option value="" disabled hidden>
              Select one option
            </option>
            <option value="no">None</option>
            <option value="one">One way</option>
            <option value="two or three">Two or three ways</option>
            <option value="more than three">More than three ways</option>
          </select>
        </div>
      )}
      {qNum === 4 && (
        <div className="question-five question-options">
          <div className="checkbox-container">
            <label className="checkbox-option">
              <input
                type="checkbox"
                name="subscription"
                value="Knitting"
                onChange={onChange}
                checked={formData.subscription.includes("Knitting")}
              />
              <span>Knitting</span>
            </label>
            <label className="checkbox-option">
              <input
                type="checkbox"
                name="subscription"
                value="ASMR"
                onChange={onChange}
                checked={formData.subscription.includes("ASMR")}
              />
              <span>ASMR</span>
            </label>
            <label className="checkbox-option">
              <input
                type="checkbox"
                name="subscription"
                value="Meditation"
                onChange={onChange}
                checked={formData.subscription.includes("Meditation")}
              />
              <span>Meditation</span>
            </label>
            <label className="checkbox-option">
              <input
                type="checkbox"
                name="subscription"
                value="Yoga"
                onChange={onChange}
                checked={formData.subscription.includes("Yoga")}
              />
              <span>Yoga</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

Question.propTypes = {
  formData: PropTypes.object.isRequired,
  qNum: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Question;
