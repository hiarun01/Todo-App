import "../TodoApp.css";
import {MdDeleteForever} from "react-icons/md";

const TaskList = ({task, HandleDeleteTask, HandleToggleTask}) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="checkBox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={HandleToggleTask}
        />
      </div>

      <span className="task-content">{task.text}</span>
      <span className="delete-icon" onClick={HandleDeleteTask}>
        <MdDeleteForever />
      </span>
    </li>
  );
};

export default TaskList;
