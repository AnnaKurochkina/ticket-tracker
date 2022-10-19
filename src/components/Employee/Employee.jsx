import {React, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import "../../sass/_variables.scss";
import "./Employee.scss";

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

return <div className='employee-card'>
            <div>
                <div className="employee-card__name"><small>name:</small><br></br><b>{props.employee.name}</b></div>
                <div className="employee-card__role"><small>role:</small><br></br><b>{props.employee.role}</b></div>
            </div>
            <div className="counter-block">
                <h2 className="counter-block__header">Task counter</h2>
                <button className="counter-block__btn" onClick={handleDecrement}><FontAwesomeIcon icon={faMinus} /></button>
                <span className="counter-block__count-tracker"><b>{counter}</b></span>
                <button className="counter-block__btn" onClick={handleIncrement}><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
}


export default Employee;