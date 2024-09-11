const VehiclesList = ({ vehicles }) => {
    return (
        <div>
            <h1>Trcuk List</h1>
            <ul>
                {vehicles.map(vehicle => (
                    <li key={vehicle.id}>
                        <p>ID: {vehicle.id}</p>
                        <p>License Number: {vehicle.licenseNumber}</p>
                        <p>Max Weight: {vehicle.maxWeight}</p>
                        <p>Tare Weight: {vehicle.tareWeight}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VehiclesList;