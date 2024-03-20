import { formatRelative } from "date-fns"

const TaskList = ({ loading, taskList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  const onTaskCheckChange = (task) => {
    // Make a POST request here with the updated task isChecked value
  }

  return (
    <section className="tasks">
      {taskList
        .map((task) => (
          <div key={task._id} className="task">
            <input
              onChange={() => onTaskCheckChange(task)}
              type="checkbox"
              checked={task.isChecked}
            />
            <h4>{task.description}</h4>
            <p>{formatRelative(task.date, new Date())}</p>
          </div>
        ))
        .reverse()
        .slice(0, 10)}
    </section>
  )
}

export default TaskList
