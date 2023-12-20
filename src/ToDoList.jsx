import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([
    'Eat Breakfast',
    'take a shower',
    'walk the dog',
  ]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {}

  function deleteTask(index) {}

  function moveTaskUp(index) {}

  function moveTaskDown(index) {}

  return (
    <div className='toDoList'>
      <h1>ToDoList</h1>
      <div>
        <input
          type='text'
          placeholder='Enter a task ...'
          value={newTask}
          onChange={handleInputChange}
        />

        <button className='addBtn' onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className='task'>{task}</span>
            <button className='deleteBtn' onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className='moveBtn' onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className='moveBtn' onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
