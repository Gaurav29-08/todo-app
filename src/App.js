
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
    <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">To-Do List</h1>
    <TaskInput />
    <TaskList />
  </div>
  );
}

export default App;
