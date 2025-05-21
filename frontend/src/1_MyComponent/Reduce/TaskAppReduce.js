import { useReducer } from "react";
import { useState } from "react";

import TaskAddReduce from "./TaskAddReduce.js";
import TaskListReduce from "./TaskListReduce.js";

export default function TaskAppReduce() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  // const [tasks, setTasks] = useState(initialTasks);
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }
  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  function tasksReducer(tasks, action) {
    // console.log(action);
    switch (action.type) {
      case "added": {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text.taskname,
            done: true,
          },
        ];
      }
      case "changed": {
        const updateList = tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
        // console.log("updateList after change:");
        // console.log(updateList);
        return updateList;
      }
      case "deleted": {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error("Unknown action: " + action.type);
      }
    }
  }

  return (
    <>
      <h1>Task List</h1>
      <TaskAddReduce onAddTask={handleAddTask} />
      <TaskListReduce
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        //setTasks={setTasks}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: true },
  { id: 2, text: "Lennon Wall pic", done: false },
];
