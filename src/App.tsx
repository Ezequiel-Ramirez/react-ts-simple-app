import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Tasks";

interface AppProps {
    title?: string;
}

function App({ title }: AppProps) {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            title: "Task 1",
            description: "Task 1 description",
            completed: false,
        },
    ]);

    return (
        <div className="" style={{ height: "100vh" }}>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img
                            src="https://img.icons8.com/ios/50/000000/todo-list.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="logo"
                            style={{
                                marginRight: "10px",
                                backgroundColor: "white",
                            }}
                        />
                        {title}
                    </a>
                </div>
            </nav>
            <main className="container p-4">
                <div className="row">
                    <div className="col-md-4">
                      <TaskForm />
                      </div>

                    <div className="col-md-8">
                        <div className="row">
                            <TaskList tasks={tasks} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
