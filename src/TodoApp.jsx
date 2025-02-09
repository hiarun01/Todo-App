import "./TodoApp.css";
import {useState} from "react";
import DateAndTime from "./Components/DateAndTime";
import TaskFrom from "./Components/TaskFrom";
import TaskList from "./Components/TaskList";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const HandleFromSubmit = (value) => {
    if (!value) {
      alert("Please add a task");
      return;
    }
    if (tasks.includes(value)) {
      alert("Task already exists");
      return;
    }
    setTasks((prevTask) => [...prevTask, value]);
  };

  // Delete Task fun

  const HandleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Delete Task End

  return (
    <>
      <main className="container">
        <section>
          <DateAndTime />
        </section>
        <section className="form-container">
          <TaskFrom AddTodoFun={HandleFromSubmit} />
        </section>
        <section className="task-container">
          <ul className="task-list">
            {tasks.map((task, i) => {
              return (
                <TaskList
                  task={task}
                  key={i}
                  HandleDeleteTask={HandleDeleteTask}
                />
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
