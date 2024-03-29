import React from "react";
import states from "../../data/states";

const SelectStates = ({ onChange }) => {
  return (
    <div className="select_states">
      <label htmlFor="state">State</label>
      <select id="state" defaultValue="" onChange={onChange}>
        <option value="" disabled>
          Select your state
        </option>
        {states.map((state) => (
          <option key={state.abbreviation} value={state.abbreviation}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectStates;
