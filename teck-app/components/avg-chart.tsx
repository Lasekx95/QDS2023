import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Averageschart = () => {

  let data = [
    { name: "Queue Time", value: 1.78 },
    { name: "Loading Time", value: 1.56 },
    { name: "Non-productive Time", value: 6.15 },
    { name: "Dumping Time", value: 0.67 },
    { name: "Productive Time", value: 13.84 }
  ]

  const colours:string[] = ['#41D3BD', '#FFFFF2', '#791E94', '#DE6449', '#407899'];
  
  return (
    <div className="App">
      <h1 className='text-xl text-center'>Productivity Measurement</h1>
      <h2 className='text-center'>in Hours</h2>
      <PieChart width={400} height={400} className="-m-10 ">
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill='#040f76'
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default Averageschart;