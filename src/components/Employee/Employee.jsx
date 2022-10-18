import "./Employee.scss";
// import team from "../../data/team.js"


const Employee = (props) => {
    
    const deleteHandler = () => {
        console.log("clicked");
    }
    const addHandler = () => {
        console.log("clicked");
    }

return <div className='card'>
            <div>
                <div>{props.employee.name}</div>
                <div>{props.employee.role}</div>
            </div>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
                <span>0</span>
                <button className="btn" onClick={addHandler}>Add</button>
            </div>
        </div>
}


export default Employee;