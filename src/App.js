import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
      tasks: [
        {id:1, title:"Dishes", description: "Empty Dishwasher", deadline: "Today"},
        {id:2, title:"Laundry", description: "FOld clothes and put away", deadline: "Tomorrow"},
        {id:3, title:"Tidy up", deadline: "Today"},
        {id:4, title: "Raid night tonight", description: "Pandaemonium 1 Savage", deadline: "7pm-10pm"},
        {id:5, title: "Week 2 Labwork", description: "Get ahead of the class", deadline: "Now!"}
      ]
  });

  return (
    <div className="container">

      <h1>Tasky</h1>

      {taskState.tasks.map((task) => (
        <Task
        title={task.title}
        description={task.description}
        deadline={task.deadline}
        key={task.id}
        />
      ))}

    </div>
  );
}

export default App;
