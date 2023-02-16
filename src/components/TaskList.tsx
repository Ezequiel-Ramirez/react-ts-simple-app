import React from "react";
import { Task } from "../interfaces/Tasks";
import TaskCard from "./TaskCard";

interface Props {
    tasks: Task[];
    deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, deleteTask }: Props) => {
    return (
        <>
            {tasks.map((task) => (
                < div className='col-md-4 pb-2'>

                    <TaskCard task={task} key={task.id} deleteTask={deleteTask} />
                </div>
            ))}
        </>
    );
};

export default TaskList;
