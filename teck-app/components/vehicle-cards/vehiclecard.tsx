

const Vehiclecard = () => {
    return ( <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Vehicle ID: #0244</h5>
    <ul className="font-normal text-gray-700">
    <li>
    Driver: Ted Cruz
    </li> 
    <li>
    Current Destination: Bogota, Columbia
    </li>
    <li>
    Current Payload: 670kg
    </li>
    <li>
    Fuel Consumption: 340L
    </li>
    <li>
    Current day milage: 45miles
    </li>
    <br></br>
    <li className="text-xl text-red-500">
    Home---*In Transit*---Destination
    </li>
    </ul>
</a> );
}
 
export default Vehiclecard;