import logo from './logo.svg';
import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash, dry, put away"/>
      <Task title="Laundry" deadline="Tomorrow" description="Clean, dry, hang outside if nice">
      </Task>
      <Task title="Tidy" deadline="Today" description="General cleaning and polishing."/>
    </div>
  );
}

export default App;
