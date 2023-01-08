

const Vehiclecard2 = () => {
    return ( <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Vehicle ID: #0107</h5>
    <ul className="font-normal text-gray-700 dark:text-gray-400">
    <li>
    Driver: Tom Jones
    </li> 
    <li>
    Current Destination: Portland, USA
    </li>
    <li>
    Current Payload: 1600kg
    </li>
    <li>
    Fuel Consumption: 120L
    </li>
    <li>
    Current day milage: 28miles
    </li>
    <br></br>
    <li className="text-xl text-red-500">
    *Home*---In Transit---Destination
    </li>
    </ul>
</a> );
}
 
export default Vehiclecard2;