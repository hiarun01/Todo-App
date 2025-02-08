import "./TodoApp.css";
import {useEffect, useState} from "react";
import {MdDeleteForever} from "react-icons/md";

const TodoApp = () => {
  const [value, setValue] = useState("");

  const [tasks, setTasks] = useState([]);

  const [dateTime, setDateTime] = useState("");

  // Functionality to add task on click of add task button

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

  // Date amd Time functionality

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const date = now.toLocaleDateString();

      setDateTime(`${date} - ${time}`);
    }, 1000);

    return () => clearInterval(interval);
  });

  // Delete Task functionality on click of delete icon

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

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
              return (
                <li className="single-task-container" key={i}>
                  <div className="checkbox icon-style">
                    <input type="checkbox" />
                  </div>
                  <div>
                    <span className="task-content">{task}</span>
                  </div>
                  <div
                    className="delete-icon icon-style"
                    onClick={() => handleDeleteTask(i)}
                  >
                    <MdDeleteForever />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <button className="clear-all-btn" onClick={() => setTasks([])}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
};

export default TodoApp;
