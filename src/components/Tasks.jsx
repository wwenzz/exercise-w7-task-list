import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export const Tasks = () => {
  const [taskList, setTaskList] = useState([]);
  // define the setting state functions
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  // fetch tasks
  const fetchTasks = () => {
    fetch("https://week-7-backend.onrender.com/tasks")
      .then(res => res.json())
      .then(data => setTaskList(data))
      .catch(error => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleNewTodoChange = event => {
    // set a  new ToDo from the value of the textarea defined in the TaskForm component
    const userInput = event.target.value;
    setNewTodo(userInput);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    fetch("https://week-7-backend.onrender.com/tasks", {
      method: "POST",
      body: JSON.stringify({ description: newTodo }),
      headers: { "Content-Type": "application/json" },
    }).then(response => response.json());

    // Ok, see you in the meeting room :)
    // define your POST request for new ToDo
    // don't forget to set the loading state
  };

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
  );
};
