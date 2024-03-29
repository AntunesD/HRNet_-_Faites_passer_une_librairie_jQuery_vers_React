import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SelectStates from "./SelectStates";

describe("SelectStates component", () => {
  it("renders with options correctly", () => {
    render(<SelectStates />);
    const selectElement = screen.getByLabelText("State");
    
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("");
    
    const selectOption = screen.getByText(/Select\syour\sstate/i);
    expect(selectOption).toBeInTheDocument();
    expect(selectOption).toHaveAttribute("disabled");
    expect(selectOption).toHaveAttribute("value", "");

    const stateOptions = ["Alabama", "Alaska", "Arizona"];
    stateOptions.forEach((stateName) => {
      const option = screen.getByText(stateName);
      expect(option).toBeInTheDocument();
    });
  });

  it("calls onChange handler when an option is selected", () => {
    const handleChange = jest.fn();
    render(<SelectStates onChange={handleChange} />);
    const selectElement = screen.getByLabelText("State");

    fireEvent.change(selectElement, { target: { value: "CA" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
