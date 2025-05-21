import { useState, useContext } from "react";
import { TasksDispatchContext } from "./TasksContext";
import { TasksContext } from "./TasksContext";

export default function TaskAddContext() {
  const [taskname, setTaskname] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  const tasks = useContext(TasksContext);

  if (tasks == null) {
    throw new Error("TaskAddContext must be used within a TaskAppContext");
  }
  return (
    <>
      <div className="contain_input">
        <label>Task Name: </label>
        <input
          type="text"
          value={taskname}
          onChange={(e) => setTaskname(e.target.value)}
        />
        <button
          onClick={() => {
            // console.log(tasks);
            dispatch({
              type: "added",
              id: tasks.length + 1,
              text: taskname,
            });
          }}
        >
          {" "}
          Add Task
        </button>
      </div>
    </>
  );
}
