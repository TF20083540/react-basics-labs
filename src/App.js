import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import AddTaskForm from './components/Form';
import React, { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {

  const [ taskState, setTaskState ] = useState({
    
      tasks: [
        
        {id:1, title:"Dishes", description: "Empty Dishwasher", priority: "High", deadline: "Today", done:false},
        {id:2, title:"Laundry", description: "FOld clothes and put away", deadline: "Tomorrow", done:false},
        {id:3, title:"Tidy up", deadline: "Today", done:false},
        {id:4, title: "Raid night tonight", description: "Pandaemonium 1 Savage", deadline: "7pm-10pm", done:false},
        {id:5, title: "Week 2 Labwork", description: "Get ahead of the class", deadline: "Now!", done:false}
      ]
  });

  const [formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: ""
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  }

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      case "priority":
        form.priority = event.target.value;
        break;
      default:
        form = formState;
    }
    setFormState(form);
    console.log(formState);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();

    tasks.push(form);
    setTaskState({tasks});
  }

  

  return (
    <div className="container">
      {/* App Header */}
      <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx = {{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'
          }}
        >
          Tasky
        </Typography>
      </Container>
      {/* End App Header */}

      {/* Task Card Grid */}
      <container maxWith="md" component="main">
        <Grid container spacing={5} allignItems="flex-top" justifyContents="center">
          {taskState.tasks.map((task, index) => (
            <Task
            title={task.title}
            description={task.description}
            deadline={task.deadline}
            priority={task.priority} /*Priority Exercise code*/
            done={task.done}
            key={task.id}
            markDone = {() => doneHandler(index)}
            deleteTask = {() => deleteHandler(index)}
            />
          ))}
        </Grid>
      </container>
      {/* EndTask Card Grid */}

      {/* Footer - Add Task Form */}
      <Container
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          my: 6,
          py: 6,
        }}
      >
        <Grid container justifyContent="center">
          <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
        </Grid>
      </Container>
      {/* End Footer */}
    </div>
  );
}

export default App;
