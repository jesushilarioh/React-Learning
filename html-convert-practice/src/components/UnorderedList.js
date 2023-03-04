
export default function UnorderedList(props) {

    const list = props.listItems;

    return(
        <ul>
            {list.map(item => <li>{item}</li>)}
        </ul>
    );
}