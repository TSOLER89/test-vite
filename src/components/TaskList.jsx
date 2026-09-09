

import React from 'react';

/* Task list component */
function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.done ? "[x]" : "[ ]"} {task.text}
        </li>
      ))}
    </ul>
  );
}
export default TaskList;

// Användning:
<TaskList
  tasks={[
    { id: 1, text: "Handla mat", done: true },
    { id: 2, text: "Städa", done: false },
  ]}
/>