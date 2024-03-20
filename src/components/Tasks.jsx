import { useState } from "react"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

export const Tasks = () => {
  const [taskList, setTaskList] = useState([])
  const [loading] = useState(false)
  const [newTodo] = useState("")

  const handleNewTodoChange = () => {
    // set a  new ToDo from the value of the textarea defined in the TaskForm component
  }

  const onFormSubmit = async () => {
    // define your POST request for new ToDo
    // don't forget to set the loading state
  }

  return (
    <div className="wrapper">
      <TaskForm
        newTodo={newTodo}
        onNewTodoChange={handleNewTodoChange}
        onFormSubmit={onFormSubmit}
      />
      <TaskList
        loading={loading}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  )
}
