import React, { useState } from "react";
import "./EmployeeForm.scss";

import SelectDate from "../SelectDates/SelectDates";
import SelectStates from "../SelectStates/SelectStates";

import postEmployee from "../../service/PostEmployee";

import Modal from "modal_antunes_lib/dist/bundle";

function EmployeeForm() {
  // Les éléments du formulaire
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");

  // Afficher ou masquer la modal
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Vérification de chaque champ du formulaire
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      dateOfBirth === "" ||
      startDate === "" ||
      street.trim() === "" ||
      city.trim() === "" ||
      state.trim() === "" ||
      zipCode.trim() === "" ||
      department === ""
    ) {
      // Affichage d'un message d'erreur ou traitement supplémentaire si nécessaire
      console.log("Veuillez remplir tous les champs du formulaire.");
      return; // Arrêter le traitement de la soumission du formulaire
    }

    try {
      // Création de l'objet employé
      const employee = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
        department: department,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
      };

      // Appel à postEmployee pour ajouter le nouvel employé
      await postEmployee(employee);

      setShowModal(true);
    } catch (error) {
      console.error('Error adding employee:', error.message);
      // Gérer les erreurs si nécessaire
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        id="create-employee"
        data-testid="create-employee"
      >
        <h2>Create Employee</h2>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <SelectDate
          name="Date of Birth"
          id="date-of-birth"
          selectedDate={dateOfBirth}
          onChange={setDateOfBirth}
        />

        <SelectDate
          name="Start Date"
          id="start-date"
          selectedDate={startDate}
          onChange={setStartDate}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <SelectStates onChange={(e) => setState(e.target.value)} />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="" disabled>
            Select your department
          </option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
        </select>

        <button className="button" type="submit">
          Save
        </button>
      </form>

      {/* Affichage conditionnel de la modal */}
      {showModal && (
        <Modal
          onClose={closeModal}
          title="Confirmation"
          paragraph="Employee has been saved successfully!"
        />
      )}
    </div>
  );
}

export default EmployeeForm;
