import React, { useState } from 'react';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Set up project", completed: true },
  ]);

  return (
    <div className="App">
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
