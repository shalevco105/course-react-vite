const TaskComp = ({ task }) => {

    return (
        <div style={{ border: "10px #8780f348", padding: "50px", background:"#8780f348", borderRadius: "15px", margin:"10px"}}>
            Title: {task.title} <br />
            Completed: {task.completed}
        </div>
    );
};


export default TaskComp;