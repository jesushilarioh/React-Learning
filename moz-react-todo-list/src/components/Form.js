
import React, { useState } from "react";

export default function Form(props) {


  // Used for state
  const [name, setName] = useState('');



  function handleSubmit(e) {
    e.preventDefault();
    // calls function-as-a-prop in App.js
    // uses the 1st returned value of useState method (data)
    if (name !== '')
      props.addTask(name); 
    else
      alert("Must enter a value!!");
  }

  function handleChange(e) {
    // console.log("Typing!");
    // console.log(e.target.value);
    setName(e.target.value); // 2nd returned value of useState method
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name} // from useState() function: first returned value
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}