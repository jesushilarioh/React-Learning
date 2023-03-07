
export default function OrderedList(props) {

    const items = props.orderedListItems;

    return(
        <ol>
            {items.map(item => <li key={item.id}>{item.description}</li>)}
        </ol>
    );
}