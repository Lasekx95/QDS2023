import React from 'react';
import axios from "axios";
import { StringifyOptions } from 'querystring';

interface TruckData {
  truck_id: number;
  gps_northing: number;
  fuel_rate: number;
  status: string;
  payload: number;
  truck_type_id: number;
  shovel_id: number;
  dump_id: number
}

const Efficencytable = () => {
    const [data, setData] = React.useState<TruckData[]>([]);

  React.useEffect(() => {
    axios.get('https://teck-prod.herokuapp.com/playground/data/').then(response => {
      setData(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);
  
    return ( <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                <th scope="col" className="px-6 py-3">
                    Dist. Travel
                </th>
                <th scope="col" className="px-6 py-3">
                    Fuel Rate L/km
                </th>
                <th scope="col" className="px-6 py-3">
                    Payloads
                </th>
                <th scope="col" className="px-6 py-3">
                    Queue Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Queue Fuel Rate
                </th>
                <th scope="col" className="px-6 py-3">
                    Non-productive Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Non productive Fuel Rate
                </th>
            </tr>
        </thead>
        <tbody>
        
        {data && data.map((truck: TruckData, index: number) => (
    <tr className="bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        ID# {truck.truck_id}
      </th>
      <td className="px-6 py-4">{truck.gps_northing}</td>
      <td className="px-6 py-4">{truck.fuel_rate}</td>
      <td className="px-6 py-4">{truck.status}</td>
      <td className="px-6 py-4">{truck.payload}</td>
      <td className="px-6 py-4">{truck.truck_type_id}</td>
      <td className="px-6 py-4">{truck.shovel_id}</td>
      <td className="px-6 py-4">{truck.dump_id}</td>
      
      {/* render the rest of the table cells here */}
    </tr>
  ))}
        </tbody>
    </table>
</div>
 );
}
 
export default Efficencytable;