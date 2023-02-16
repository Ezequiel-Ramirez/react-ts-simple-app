import React from "react";
import { Task } from "../interfaces/Tasks";
import TaskCard from "./TaskCard";

interface Props {
    tasks: Task[];
}

const TaskList = ({ tasks }: Props) => {
    return (
        <>
            {tasks.map((task) => (
                < div className='col-md-4'>

                    <TaskCard task={task} key={task.id} />
                </div>
            ))}
        </>
    );
};

export default TaskList;
