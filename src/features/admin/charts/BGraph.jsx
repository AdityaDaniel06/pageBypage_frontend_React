import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "May", Expenses: 5890, Profit: 1800 },
  { name: "June", Expenses: 9390, Profit: 3800 },
  { name: "July", Expenses: 5400, Profit: 1300 },
  { name: "Aug", Expenses: 6460, Profit: 2300 },
  { name: "Sep", Expenses: 6400, Profit: 4300 },
  { name: "Oct", Expenses: 7900, Profit: 1100 },
];

function BGraph() {
  return (
    <div className="w-1/2">
      <h2 className="mb-4 text-center text-lg font-bold text-emerald-600">
        Monthly Financials
      </h2>
      <ResponsiveContainer width="80%" aspect={1}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis unit="₹" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Expenses" fill="#82ca9d" />
          <Bar dataKey="Profit" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BGraph;
