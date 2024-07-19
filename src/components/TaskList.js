import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="mt-6">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
}

export default TaskList;
