import React, { useState } from "react";
import Select from 'react-select';
import './index.scss';
import Employee from "./components/Employee/Employee.jsx";
import team from "./data/team.js";

function App() {

  const [search, setNewSearch] = useState("");
  const [selectedRoles, setSelectedRole] = useState([]);

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const handleSelectedRole = (selected) => {
    const values = selected.map((item) => item.value);
    setSelectedRole(values);
  };

  let allRoles = team.map((item) => item.role);
  allRoles = new Set(allRoles);
  allRoles = [...allRoles];
  const roleOptions = allRoles.map((item) => {
    return { value: item, label: item }
  });

  const filtered = team.filter((item) => {
    const nameMatch = !search || item.name.toLowerCase().includes(search.toLowerCase());
    const roleMatch = !selectedRoles.length || selectedRoles.includes(item.role);
    return nameMatch && roleMatch;
  });

  return (
    <div className='ticket-tracker'>
      <h1 className='ticket-tracker__heading'>Ticket Tracker</h1>
      <div className="ticket-tracker__select-options">
      <label>Search:{" "}</label>
      <input className="ticket-tracker__filter-name" type="text" value={search} placeholder="Search by name" onChange={handleSearchChange} />
      <label>Role:</label>
      <Select
        isMulti
        onChange={handleSelectedRole}
        className="ticket-tracker__filter-role"        
        options={roleOptions}
      />
      </div>
      <div className='ticket-tracker__cards'>
        {filtered.map((item) => <Employee key={item.id} employee={item}/>)}
      </div>
    </div>
  )
};

export default App;
