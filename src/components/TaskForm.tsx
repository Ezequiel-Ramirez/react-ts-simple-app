import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import { MdFactCheck } from "react-icons/md";
import { Task } from "../interfaces/Tasks";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Props {
    addNewTask: (task: Task) => void;
}

const initialState = {
    title: "",
    description: "",
};

const TaskForm = ({ addNewTask }: Props) => {
    const [task, setTask] = useState(initialState);
    const inputTitle = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: InputChange) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addNewTask(task);
        setTask(initialState);
        inputTitle.current?.focus();
    };

    return (
        <div className="card card-body bg-secondary text-dark">
            <h1 className="text-center">New Task</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        placeholder="Write a task"
                        className="form-control"
                        autoFocus
                        ref={inputTitle}
                        onChange={(e) => {
                            handleInputChange(e);
                        }}
                        value={task.title}
                    />
                </div>
                <div className="form-group" style={{ marginTop: "10px" }}>
                    <textarea
                        name="description"
                        rows={2}
                        className="form-control"
                        placeholder="Write a description"
                        onChange={(e) => {
                            handleInputChange(e);
                        }}
                        value={task.description}
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary btn-block"
                    style={{ marginTop: "10px" }}
                >
                    Save <MdFactCheck />
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
