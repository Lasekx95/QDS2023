import React from 'react';
import axios from "axios";

interface TruckData {
  // define the shape of the truck data here
  truck_id: string;
  truck_type_id: string;
}


const Efficencytable = () => {
    const [data, setData] = React.useState<TruckData[]>([]);

  React.useEffect(() => {
    // make a request to the API to fetch the data
    axios.get('https://teck-prod.herokuapp.com/playground/data/?format=api').then(response => {
      setData(response.data);
    }).catch(error => {
      console.log(error);
      // you can also set an error state here
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
        
        {data &&
  data.map((truck: TruckData, index: number) => (
    <tr className="bg-white border-b">
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        ID# {truck.truck_id}
      </th>
      <td className="px-6 py-4">{truck.truck_type_id}</td>
      {/* render the rest of the table cells here */}
    </tr>
  ))}

        </tbody>
    </table>
</div>
 );
}
 
export default Efficencytable;


                      {/* <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ID# 02
                </th>
                <td className="px-6 py-4">
                    FUCK
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ID# 03
                </th>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ID# 04
                </th>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ID# 05
                </th>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
            </tr>
            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ID# 06
                </th>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
            </tr>            <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    ID# 07
                </th>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
                <td className="px-6 py-4">
                    0
                </td>
            </tr> */}
