import { useEffect } from "react";
import { useState } from "react";

const Vehiclecard = () => {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        setNumber(Math.floor(Math.random() * 10) + 1);
    }, []);

    return (
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Vehicle ID: #{number}</h5>
            <ul className="font-normal text-gray-700">
                {/* <li>
                Driver: Ted Cruz
            </li> */}
                <li>
                    Current Destination: Bogota, Columbia
                </li>
                <li>
                    Current Payload: {number}kg
                </li>
                <li>
                    Fuel Consumption: {number}l
                </li>
                <li>
                    Current day milage: {number}km
                </li>
                <br></br>
                {/* <li className="text-xl text-red-500">
                Home---*In Transit*---Destination
            </li> */}
            </ul>

            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-black ">Progress</span>
                <span className="text-sm font-medium text-black ">{number}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div className="bg-blue-600 h-2.5 rounded-full width: {number}%"></div>
            </div>

        </a>
    );
}

export default Vehiclecard;