
export default function UnorderedList(props) {

    const list = props.listItems;

    return(
        <ul>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    );
}