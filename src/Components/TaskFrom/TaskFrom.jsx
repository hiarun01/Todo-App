import "./TaskFrom.css";

const TaskFrom = ({value, setValue, tasks, setTasks}) => {
  const HandleFromSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setTasks((prevTasks) => setTasks([...prevTasks, value]));
    if (prevTasks === value) {
      alert("Task already exists");
    } else {
    }
  };

  return (
    <section>
      <form className="task-form" onSubmit={HandleFromSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="Submit">Add Task</button>
      </form>
    </section>
  );
};

export default TaskFrom;
