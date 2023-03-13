import './index.css';
import Todo from "./components/Todo";
import Form from './components/Form';
import FilterButton from './components/FilterButton';

/* 
  Global function-as-a-prop to pass from child to parent. 
  used in <Form /> componant in export default App(props) Component
*/
function addTask(name) {
  alert(name);
}

function App(props) {

  // map through a list of objects and 
  // assign props and values individually
  // to a <Todo /> component
  const taskList = props.tasks.map((task) => (
      <Todo
        name={task.name}
        completed={task.completed}
        id={task.id}
        key={task.id}
      />
    )
  );



  return (
    <div className="todoapp stack-large">
      <h1>MDN React todo list</h1>
      <Form addTask={addTask} /> {/* Global function in App.js : addTask(parameter) */}
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;