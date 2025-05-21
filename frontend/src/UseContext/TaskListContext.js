import { useContext } from "react";
import { TasksDispatchContext, TasksContext } from "./TasksContext";

export default function TaskListContext() {
  const dispatch = useContext(TasksDispatchContext);
  const tasks = useContext(TasksContext);
  if (tasks == null) {
    throw new Error("TaskAddContext must be used within a TaskAppContext");
  }

  return (
    <>
      <div className="content_list">
        <table border="1" className="listTable">
          <thead>
            <tr>
              <th style={{ width: "20px" }}></th>
              <th>Task Name</th>
              <th style={{ width: "120px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td style={{ width: "20px" }}>
                  <input type="checkbox"></input>
                </td>
                <td>
                  {task.done ? (
                    task.text
                  ) : (
                    <input
                      className="input-fit-column"
                      id={`task_` + task.id}
                      type="text"
                      value={task.text}
                      onChange={(e) => {
                        const updatedTask = { ...task, text: e.target.value }; // Chỉ thay đổi task hiện tại
                        //onChangeTask(updatedTask);
                        // onChangeTask({ ...task, text: e.target.value })
                        dispatch({
                          type: "changed",
                          task: { ...task, text: e.target.value },
                        });
                      }}
                    />
                  )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "changed",
                        task: { ...task, done: !task.done },
                      })
                    }
                  >
                    {" "}
                    {task.done ? "Edit" : "Save"}
                  </button>
                  &nbsp;{" "}
                  <button
                    onClick={() =>
                      dispatch({
                        type: "deleted",
                        id: task.id,
                      })
                    }
                  >
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
