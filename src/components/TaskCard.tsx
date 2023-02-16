import React from "react";
import { Task } from "../interfaces/Tasks";

interface Props {
    task: Task;
}

const TaskCard = ({ task }: Props) => {
    return (
        <div className="card card-body bg-success rounded-4" style={{marginTop: '10px'}}>
            <div key={task.id}>
                <h2>{task.title}</h2>
                <p>{task.id}</p>
                <p>{task.description}</p>
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
};

export default TaskCard;
