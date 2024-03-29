import Header from "../../components/Header/Header";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

import "./Home.scss"

function Home() {
  return (
    <div className="home">
     <Header link="/employee-list" linkName="View Current Employees"/>
     <EmployeeForm/>
    </div>
  );
}

export default Home;