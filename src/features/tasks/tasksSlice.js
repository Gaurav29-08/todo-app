
import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, editing: false });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) task.text = newText;
    },
    toggleEditing: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.editing = !task.editing;
    }
  }
});

export const { addTask, removeTask, editTask, toggleEditing } = tasksSlice.actions;
export default tasksSlice.reducer;
