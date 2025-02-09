import "../TodoApp.css";
import {useState} from "react";

const TaskFrom = ({AddTodoFun}) => {
  const [value, setValue] = useState("");

  const HandleFromSubmit = (e) => {
    e.preventDefault();
    AddTodoFun(value);
    setValue("");
  };

  return (
    <form className="task-form" onSubmit={HandleFromSubmit}>
      <input
        type="text"
        placeholder="Enter Your Task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="Submit">Add Task</button>
    </form>
  );
};

export default TaskFrom;
