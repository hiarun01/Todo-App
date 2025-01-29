import "../App.css"; // Importing the CSS file
const Todo = () => {
  return (
    <section className="todo-container">
      <header>
        <h2>Todo</h2>
        <section>
          <form>
            <div>
              <input
                className="todo-input"
                type="text"
                placeholder="Add new task"
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
      </header>
    </section>
  );
};

export default Todo;
