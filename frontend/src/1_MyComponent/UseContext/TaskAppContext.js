import { useReducer } from "react";

import TaskAddContext from "./TaskAddContext.js";
import TaskListContext from "./TaskListContext.js";

import { TasksContext, TasksDispatchContext } from "./TasksContext.js";

export default function TaskAppContext() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  //   function handleAddTask(text) {
  //     dispatch({
  //       type: 'added',
  //       id: nextId++,
  //       text: text,
  //     });
  //   }

  //   function handleChangeTask(task) {
  //     dispatch({
  //       type: 'changed',
  //       task: task,
  //     });
  //   }
  //  function handleDeleteTask(taskId) {
  //     dispatch({
  //       type: 'deleted',
  //       id: taskId,
  //     });
  //   }

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
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <>
          <h1>Task List</h1>

          <TaskAddContext></TaskAddContext>
          <TaskListContext></TaskListContext>
        </>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: true },
  { id: 2, text: "Lennon Wall pic", done: false },
];
