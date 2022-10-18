import './index.scss';
import Employee from "./components/Employee/Employee.jsx";
import team from "./data/team.js";

function App() {

  return (
    <>
      <div>
        <h1>Ticket Tracker</h1>
        <div className='grid-container'>
        {team.map( item => {
            return <Employee key={item.id} employee={item}/>
          })}
        </div>
      </div>
    </>
  )
};

export default App;

