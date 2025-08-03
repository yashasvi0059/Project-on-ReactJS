import React from 'react';
import '../assets/Styles/First.css';
import EmployeeArray from "./EmployeeArray";

const EmployeeList = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>COURSE</th>
            <th>PHONE NO.</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>FATHER'S NAME</th>
            <th>MOTHER'S NAME</th>
            <th>YEAR</th>
            <th>ACTIVE</th>
          </tr>
        </thead>
        <tbody>
          {EmployeeArray.map((emp) => ( 
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.course}</td>
              <td>{emp.phoneNo}</td>
              <td>{emp.email}</td>
              <td>{emp.address}</td>
              <td>{emp.fathersName}</td>
              <td>{emp.mothersName}</td>
              <td>{emp.year}</td>
              <td>{emp.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;

