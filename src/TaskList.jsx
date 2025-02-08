import "./TodoApp.css";

import {ImCheckboxUnchecked} from "react-icons/im";

const TaskList = ({task, i}) => {
  return (
    <li className="single-task-container" key={i}>
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div>
        <span className="task-content">{task}</span>
      </div>
      <div></div>
    </li>
  );
};

export default TaskList;
