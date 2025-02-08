import TaskList from "./TaskList";
import "./TodoApp.css";
import {useState} from "react";

const TodoApp = () => {
  const [value, setValue] = useState("");

  const [tasks, setTasks] = useState([]);

  const HandleFromSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please add a task");
      return;
    }

    if (tasks.includes(value)) {
      alert("Task already exists");
      setValue("");
      return;
    }
    setTasks((prevTask) => [...prevTask, value]);
    setValue("");
  };

  return (
    <>
      <main className="container">
        <section className="form-container">
          <form className="task-form" onSubmit={HandleFromSubmit}>
            <input
              type="text"
              placeholder="Enter Your Task"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="Submit">Add Task</button>
          </form>
        </section>
        <section className="task-container">
          <ul className="task-list">
            {tasks.map((task, i) => {
              return <TaskList key={i} task={task} />;
            })}
          </ul>
        </section>
      </main>
    </>
  );
};

export default TodoApp;
