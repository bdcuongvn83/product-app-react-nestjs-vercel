import { useState } from 'react';

export default function TaskAddReduce({onAddTask}) {
   const [taskname, setTaskname] = useState("");
  return (
    <><div className='contain_input'>
      <label>Task Name: </label>
      <input type='text' value={taskname} onChange={(e)=> setTaskname(e.target.value) }/>
      <button onClick={()=>onAddTask({taskname})}> Add Task</button>
      </div>
    </>
  );
}

