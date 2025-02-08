import "./TodoApp.css";

const TaskList = ({task, i}) => {
  return (
    <li className="task-item" key={i}>
      <span>{task}</span>
    </li>
  );
};

export default TaskList;
