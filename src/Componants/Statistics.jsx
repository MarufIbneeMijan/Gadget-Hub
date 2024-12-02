

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const Statistics = () => {
    const data = [
        {
          name: 'Dell XPS 13',
          uv: 1299,
          
        },
        {
          name: 'iPhone 14 Pro Max',
          uv: 1099,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Apple AirPods Pro (2nd Generation)',
          uv: 249,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apple Watch Series 8',
          uv: 399,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'MacBook Pro 14-inch',
          uv: 1999,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'HP Spectre x360',
          uv: 1199,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Samsung Galaxy S23 Ultra',
          uv: 1199,
          pv: 4300,
          amt: 2100,
        },
      ];
   
   
     
    return (
        <div>
          
           <div className='w-[80%]  mx-auto text-center'>

           <BarChart width={400} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
           </div>
         
        </div>
    );
};

export default Statistics;