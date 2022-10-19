import './index.scss';
import Employee from "./components/Employee/Employee.jsx";
import team from "./data/team.js";

function App() {

  return (
    <>
      <div className='ticket-tracker'>
        <h1 className='ticket-tracker__heading'>Ticket Tracker</h1>
        <div className='ticket-tracker__cards'>
          {team.map(item => <Employee key={item.id} employee={item}/>)}
        </div>
      </div>
    </>
  )
};

export default App;
