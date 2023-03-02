import React from 'react';

export default function Todo(props) {
    let name = props.name;
    return (
        /* 
            Boolean values in JSX attributes, must be enclosed in
            curly braces, as in {true} and {false}.
            if written as "true" or "false", the value will be
            considered a string literal. REMEMBER: this is
            javascript, not HTML!!!

            However, the (aria-press) attribute used earlier, has
            a value of "true" because (aria-pressed) is not a true
            boolean attribute in the way (checked) is.
        */
       
        <li className="todo stack-small">
            <div className="c-cb">
                <input id="todo-0" type="checkbox" defaultChecked={true} />
                <label className="todo-label" htmlFor="todo-0">
                    {name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    Edit <span className="visually-hidden">{name}</span>
                </button>
                <button type="button" className="btn btn__danger">
                    Delete <span className="visually-hidden">{name}</span>
                </button>
            </div>
        </li>
    );
}
