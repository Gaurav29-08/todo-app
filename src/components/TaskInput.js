import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border p-3 rounded-lg w-1/2 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter new task"
      />
      <button
        onClick={handleAddTask}
        className="ml-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
