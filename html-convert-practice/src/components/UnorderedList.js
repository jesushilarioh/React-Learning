
export default function UnOrderedList(props) {

    return(
        <ul>
            {/* <li>{props.listItems[0]}</li> */}
            {props.listItems.forEach((element) => 
                <li>{element}</li>
            )}
        </ul>
    );
}