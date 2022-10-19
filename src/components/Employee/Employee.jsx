import {React, useState} from "react";
import "./Employee.scss";
// import team from "../../data/team.js"


const Employee = (props) => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    
    const handleDecrement = () => {
        if (counter > 0){
            setCounter(counter - 1);
        }
    };

return <div className='card'>
            <div>
                <div>{props.employee.name}</div>
                <div>{props.employee.role}</div>
            </div>
            <div className="actions">
                <button className="btn" onClick={handleDecrement}>Delete</button>
                <span>{counter}</span>
                <button className="btn" onClick={handleIncrement}>Add</button>
            </div>
        </div>
}


export default Employee;