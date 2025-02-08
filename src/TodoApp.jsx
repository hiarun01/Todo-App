import TaskList from "./TaskList";
import "./TodoApp.css";
import {useEffect, useState} from "react";

const TodoApp = () => {
  const [value, setValue] = useState("");

  const [tasks, setTasks] = useState([]);

  const [dateTime, setDateTime] = useState("");

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

  // Date amd Time

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();

      setDateTime(`${date} - ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <main className="container">
        <div className="date-time">
          <span>
            <strong>{dateTime}</strong>
          </span>
        </div>
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
