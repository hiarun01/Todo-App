import "../App.css"; //
import {useState} from "react";
import Task from "./Task";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (!inputValue) {
      return;
    } else if (tasks.includes(inputValue)) {
      setInputValue("");
      alert("Task already exists");
    } else {
      setTasks((prevTasks) => {
        setTasks([...prevTasks, inputValue]);
        setInputValue("");
      });
    }
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo</h1>
      </header>
      <section>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              className="todo-input"
              value={inputValue}
              type="text"
              placeholder="Add task"
              autoComplete="off"
            />
          </div>
          <div>
            <button className="todo-btn" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Todo;
