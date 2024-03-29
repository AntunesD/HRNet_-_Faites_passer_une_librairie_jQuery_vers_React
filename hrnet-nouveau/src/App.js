import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import EmployeeList from './Pages/EmployeeList/EmployeeList';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
