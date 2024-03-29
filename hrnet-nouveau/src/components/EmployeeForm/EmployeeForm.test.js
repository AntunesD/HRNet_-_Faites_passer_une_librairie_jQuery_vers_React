import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmployeeForm from "./EmployeeForm";

// Mock de la fonction postEmployee
jest.mock("../../service/PostEmployee", () => {
  return jest.fn();
});

describe("EmployeeForm component", () => {
  it("submits form data correctly", async () => {
    render(<EmployeeForm />);

    // Remplir le formulaire avec des données de test
    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "John" },
    });
    expect(screen.getByLabelText("First Name").value).toBe("John");

    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    expect(screen.getByLabelText("Last Name").value).toBe("Doe");

    fireEvent.change(screen.getByLabelText("Street"), {
      target: { value: "123 Main St" },
    });
    expect(screen.getByLabelText("Street").value).toBe("123 Main St");

    fireEvent.change(screen.getByLabelText("City"), {
      target: { value: "Anytown" },
    });
    expect(screen.getByLabelText("City").value).toBe("Anytown");

    fireEvent.change(screen.getByLabelText("Zip Code"), {
      target: { value: "12345" },
    });
    expect(screen.getByLabelText("Zip Code").value).toBe("12345");

    fireEvent.change(screen.getByLabelText("Department"), {
      target: { value: "Engineering" },
    });
    expect(screen.getByLabelText("Department").value).toBe("Engineering");

    fireEvent.change(screen.getByLabelText("Date of Birth"), {
      target: { value: "1990-01-01" },
    });
    expect(screen.getByLabelText("Date of Birth").value).toBe("01/01/1990");

    fireEvent.change(screen.getByLabelText("State"), {
      target: { value: "CA" },
    });
    expect(screen.getByLabelText("State").value).toBe("CA");

    fireEvent.change(screen.getByLabelText("Start Date"), {
      target: { value: "2024-03-28" },
    });
    expect(screen.getByLabelText("Start Date").value).toBe("28/03/2024");

    // Simuler la soumission du formulaire
    fireEvent.submit(screen.getByTestId("create-employee"));

    // Vérifier si la modal est affichée après la soumission du formulaire
    await screen.findByText("Employee has been saved successfully!");
  });
});
