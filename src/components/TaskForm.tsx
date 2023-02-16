import React from "react";
import { MdFactCheck } from "react-icons/md";

const TaskForm = () => {
    return (
        <div className="card card-body bg-secondary text-dark">
            <h1 className="text-center">New Task</h1>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        placeholder="Write a task"
                        className="form-control"
                        autoFocus
                    />
                </div>
                <div className="form-group" style={{marginTop: '10px'}}>
                    <textarea
                        name="description"
                        rows={2}
                        className="form-control"
                        placeholder="Write a description"
                    ></textarea>
                </div>
                <button className="btn btn-primary btn-block" style={{marginTop: '10px'}}>Save <MdFactCheck/></button>
            </form>
        </div>
    );
};

export default TaskForm;
