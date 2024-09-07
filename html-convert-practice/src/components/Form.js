
export function Form(props) {

    function clickEvent(e) {
        e.preventDefault();
        console.log(props.formInfo);
        alert(props.formInfo[0].paragraph);
    }

    return (

        <form onSubmit={clickEvent}>
            <label>Enter information here: </label>
            <input />
            <button>Submit</button>
        </form>
    )
}

export function FormOf2Inputs(props) {
    function clickEvent(e) {
        e.preventDefault();
        console.log(props.formInfo);
        alert(props.formInfo[1].info);
    }

    return (
        <form onSubmit={clickEvent}>
            <label>Enter some info: </label>
            <br />
            <input />
            <br />
            <label>Enter some more info: </label>
            <br />
            <input />
            <br />
            <button>Submit</button>
        </form>
    )
}