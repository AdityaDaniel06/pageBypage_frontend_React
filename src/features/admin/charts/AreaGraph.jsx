import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function AreaGraph() {
  return (
    <div className="mt-6 w-full pb-3">
      <h2 className="mb-4 pt-4 text-center text-lg font-bold text-green-600">
        Daily Growth
      </h2>
      <ResponsiveContainer height={250} width="95%">
        <AreaChart data={OLDdata}>
          <XAxis
            dataKey="label"
            tick={{ fill: "#9aa89c" }}
            tickLine={{ stroke: "#9aa89c" }}
          />
          <YAxis
            unit="₹"
            tick={{ fill: "#9aa89c" }}
            tickLine={{ stroke: "#9aa89c" }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip contentStyle={{ backgroundColor: "#d8ecd2" }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke="#1e741c"
            fill="#8cc883"
            strokeWidth={2}
            name="Total Sales"
            unit="₹"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke="#747574"
            fill="#878a87"
            strokeWidth={2}
            name="Extra Sales"
            unit="₹"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AreaGraph;

const OLDdata = [
  { label: "Oct 09", totalSales: 480, extrasSales: 320 - 300 },
  { label: "Oct 10", totalSales: 580, extrasSales: 400 - 300 },
  { label: "Oct 11", totalSales: 550, extrasSales: 450 - 300 },
  { label: "Oct 12", totalSales: 600, extrasSales: 350 - 300 },
  { label: "Oct 13", totalSales: 700, extrasSales: 550 - 300 },
  { label: "Oct 14", totalSales: 800, extrasSales: 650 - 500 },
  { label: "Oct 15", totalSales: 700, extrasSales: 700 - 500 },
  { label: "Oct 16", totalSales: 650, extrasSales: 500 - 300 },
  { label: "Oct 17", totalSales: 600, extrasSales: 600 - 300 },
  { label: "Oct 18", totalSales: 550, extrasSales: 400 - 300 },
  { label: "Oct 19", totalSales: 700, extrasSales: 600 - 500 },
  { label: "Oct 20", totalSales: 800, extrasSales: 700 - 500 },
  { label: "Oct 21", totalSales: 700, extrasSales: 600 - 500 },
  { label: "Oct 22", totalSales: 810, extrasSales: 550 - 500 },
  { label: "Oct 23", totalSales: 950, extrasSales: 750 - 500 },
  { label: "Oct 24", totalSales: 970, extrasSales: 600 - 500 },
  { label: "Oct 25", totalSales: 900, extrasSales: 700 - 500 },
  { label: "Oct 26", totalSales: 950, extrasSales: 800 - 500 },
  { label: "Oct 27", totalSales: 850, extrasSales: 700 - 500 },
  { label: "Oct 28", totalSales: 900, extrasSales: 600 - 500 },
  { label: "Oct 29", totalSales: 800, extrasSales: 800 - 500 },
  { label: "Oct 30", totalSales: 950, extrasSales: 700 - 500 },
  { label: "Oct 31", totalSales: 1100, extrasSales: 800 - 500 },
  { label: "Nov 01", totalSales: 1200, extrasSales: 900 - 500 },
  { label: "Nov 02", totalSales: 1250, extrasSales: 800 - 500 },
  { label: "Nov 03", totalSales: 1400, extrasSales: 950 - 500 },
  { label: "Nov 04", totalSales: 1500, extrasSales: 1000 - 500 },
  { label: "Nov 05", totalSales: 1400, extrasSales: 1100 - 500 },
  { label: "Nov 06", totalSales: 1450, extrasSales: 900 - 500 },
];
