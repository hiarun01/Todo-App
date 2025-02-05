import TaskFrom from "./Components/TaskFrom/TaskFrom";
import "./TodoApp.css";
import {useState} from "react";

const TodoApp = () => {
  const [value, setValue] = useState("");

  console.log(value);

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <main className="container">
        <section>
          <TaskFrom
            value={value}
            setValue={setValue}
            tasks={tasks}
            setTasks={setTasks}
          />
        </section>
      </main>
    </>
  );
};

export default TodoApp;
