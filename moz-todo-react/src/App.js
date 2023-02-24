import logo from './logo.svg';
import './App.css';

function App(props) { // note: prop as a argument

  // Variables: 
  // const subject = "React"; 
  const subject = props.subject;

  // Props: 

  // Where
  // HTML elements have attributes: <html attribute="value" >
  // React componants have props:   <ReactComponant prop="value" >

  // props can only be passed from Parent componants 
  // down to Child componants; 
  // dataflow is unidirectional in React

  // Importantly, props are read-only

  // Component props are always collected into 
  // objects in this fashion 
  // { subject: "value" }

  console.log(props);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, {subject /* <-- using variable */}!
          <br />
          Hello, {props.subject /* <-- using prop */}!
        </p>
      </header>
    </div>
  );
}

export default App;
