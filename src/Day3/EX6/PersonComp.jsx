import TaskComp from "./TaskComp";

const PersonComp = ({ person }) => {
    return (
        <div style={{ border: "10px #b281eb48", padding: "50px", background:"#b281eb48", borderRadius: "15px", margin:"10px"}}>
            <h4>{person.name}</h4>
            <h5>Tasks:</h5>
            <div>
                {
                    person.tasks.map((x, index) => {
                        return <TaskComp key={index} task={x} />
                    })
                }
            </div>
        </div>
    )
}


export default PersonComp;