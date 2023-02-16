import React from "react";
import { Task } from "../interfaces/Tasks";
import { MdDeleteForever } from "react-icons/md";
interface Props {
    task: Task;
    deleteTask: (id: number) => void;
}

const TaskCard = ({ task, deleteTask }: Props) => {
    return (
        <div className="card card-body bg-success rounded-0" >
            <div key={task.id}>
                <h2>{task.title}</h2>
                <p>{task.id}</p>
                <p>{task.description}</p>
                <button className="btn btn-danger"
                onClick={() => task.id && deleteTask(task.id)}
                >Delete <MdDeleteForever/></button>
            </div>
        </div>
    );
};

export default TaskCard;
