
export default function Table(props) {

    const items = props.tableItems;
    const propertyValues = Object.create(null);

    items.forEach(item => {
        Object.getOwnPropertyNames(item).forEach(item => {
            //Add multi-word key name
            propertyValues[item] = true;
            
        });
    });
    // console.log(propertyValues);
    
    const propertyKeys = Object.keys(propertyValues);

    return (
        <table>
            <thead>
                <tr>
                    {propertyKeys.map((item, index) => <td key={index}>{item}</td>)}
                </tr>
            </thead>
            <tbody>
                
                {items.map(item => 
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.description}</td>
                    </tr>
                )}
                
            </tbody>
        </table>
    );
}