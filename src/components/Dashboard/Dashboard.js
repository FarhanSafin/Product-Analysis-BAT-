import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip
} from "recharts";
import useDashboard from "../hooks/useDashboard";

const Dashboard = () => {

  const [data] = useDashboard();


    return (
        <div className="grid grid-rows-2 grid-flow-col gap-9 justify-center mt-20">

            <div>

            <h2 className="text-fuchsia-600 text-2xl mb-5">Monthly sale Review</h2>

            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
          </div>


        <div>
            <h2 className="text-fuchsia-600 text-2xl mb-5">Investment vs Revenue</h2>
            <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{top: 10,right: 30,left: 0,bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
            type="monotone"
            dataKey="investment"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"/>
            <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"/>
            </AreaChart>
        </div>
        
        <div>
            <h2 className="text-fuchsia-600 text-2xl mb-5">Investment vs Revenue</h2>
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{top: 20,right: 30,left: 20,bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
        
        <div className="ml-9">
            <h2 className="text-fuchsia-600 text-2xl mb-5">Investment vs Revenue</h2>
                <PieChart width={400} height={400}>
                <Pie
                data={data}
                dataKey="investment"
                cx={200}
                cy={200}
                outerRadius={60}
                fill="#8884d8"/>
                <Pie
                data={data}
                dataKey="revenue"
                cx={200}
                cy={200}
                innerRadius={70}
                outerRadius={90}
                fill="#82ca9d"
                label/>
                </PieChart>
        </div>
        </div>
      );
};

export default Dashboard;