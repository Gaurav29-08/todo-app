// src/components/TaskItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, editTask, toggleEditing } from '../features/tasks/tasksSlice';

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (task.editing) {
      dispatch(editTask({ id: task.id, newText: editText }));
    }
    dispatch(toggleEditing(task.id));
  };

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md mb-2">
      {task.editing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-2 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleEdit}
            className="ml-2 bg-gradient-to-r from-green-400 to-green-600 text-white p-2 rounded-lg shadow-md hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span className="flex-grow text-lg">{task.text}</span>
          <button
            onClick={() => dispatch(toggleEditing(task.id))}
            className="ml-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-2 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Edit
          </button>
          <button
            onClick={() => dispatch(removeTask(task.id))}
            className="ml-2 bg-gradient-to-r from-red-400 to-red-600 text-white p-2 rounded-lg shadow-md hover:from-red-500 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
