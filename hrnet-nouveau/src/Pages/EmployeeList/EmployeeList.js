import React from 'react';
import "./EmployeeList.scss"
import Header from '../../components/Header/Header';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import useEmployees from '../../service/GetEmployees';

const EmployeeList = () => {

  // Utiliser le hook useEmployees pour récupérer les données des employés
  const { employees, isLoading, error } = useEmployees();
   // Déterminer le contenu à afficher en fonction de l'état
   const content = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <EmployeeTable columns={columns} data={employees} />;
  };

    const columns = [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Start Date', accessor: 'startDate' },
        { Header: 'Department', accessor: 'department' },
        { Header: 'Date of Birth', accessor: 'dateOfBirth' },
        { Header: 'Street', accessor: 'street' },
        { Header: 'City', accessor: 'city' },
        { Header: 'State', accessor: 'state' },
        { Header: 'Zip Code', accessor: 'zipCode' }
    ];

  return (
    <div className='EmployeeList'>
    <Header link="/" linkName="Home"/>
    {content()}
    </div>
  );
}

export default EmployeeList;
