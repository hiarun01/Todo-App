import "../TodoApp.css";
import {MdDeleteForever} from "react-icons/md";

const TaskList = ({task, i, HandleDeleteTask}) => {
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
        onClick={() => HandleDeleteTask(i)}
      >
        <MdDeleteForever />
      </div>
    </li>
  );
};

export default TaskList;
