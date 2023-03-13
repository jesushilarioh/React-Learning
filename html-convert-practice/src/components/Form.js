
export default function Form(props) {

    function clickEvent(e) {
        e.preventDefault();
        console.log(props.formInfo);
        alert(props.formInfo[0].info);
    }

    return (

        <form onSubmit={clickEvent}>
            <label>Enter information here: </label>
            <input />
            <button>Submit</button>
        </form>
    )
}