

const Vehiclecard1 = () => {
    return ( <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Vehicle ID: #0074</h5>
    <ul className="font-normal text-gray-700 dark:text-gray-400">
    <li>
    Driver: Tom Jones
    </li> 
    <li>
    Current Destination: 100 Mile, Canada
    </li>
    <li>
    Current Payload: 830kg
    </li>
    <li>
    Fuel Consumption: 420L
    </li>
    <li>
    Current day milage: 63miles
    </li>
    <br></br>
    <li className="text-xl text-red-500">
    Home---In Transit---*Destination*
    </li>
    </ul>
</a> );
}
 
export default Vehiclecard1;