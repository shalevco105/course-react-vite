import { useState } from "react";
import PersonComp from "./PersonComp";

const PeopleComp = () => {
    const [people, setPeople] = useState([
        { id: 1, name: 'John', tasks: [{title: 'Task 1' , completed:'true'}, {title: 'Task 2' , completed:'true'}] },
        { id: 2, name: 'Jimmy', tasks: [{title: 'Tasky 1' , completed:'yooohooo'}, {title: 'Tasky 2' , completed:'cool'}] }
    ]);

    return (
        <div style={{ border: "10px #f094dc88", padding: "50px", background:"#f094dc57", borderRadius: "15px"}}>
            <h1>
                People List:
            </h1>
            <div>
                {people.map(person => {
                    return (
                        <PersonComp key={person.id} person={person} />
                    )
                })}
            </div>
        </div>
    );
};


export default PeopleComp;