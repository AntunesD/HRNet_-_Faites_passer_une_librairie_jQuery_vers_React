import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import EmployeeTable from "./EmployeeTable";

describe("EmployeeTable component", () => {
  it("renders with the correct elements and controls", () => {
    const columns = [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "Age",
        accessor: "age",
      },
    ];

    const data = [
      { name: "John Doe", position: "Manager", age: 35 },
      { name: "Jane Smith", position: "Developer", age: 28 },
    ];

    render(<EmployeeTable columns={columns} data={data} />);

    // Check if table headers are rendered
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Position")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();

    // Check if data rows are rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.getByText("Manager")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
    expect(screen.getByText("35")).toBeInTheDocument();
    expect(screen.getByText("28")).toBeInTheDocument();

    // Check if pagination controls are rendered
    expect(screen.getByText("1 of 1")).toBeInTheDocument();
    expect(screen.getByText("Show 10")).toBeInTheDocument();

  });
});
