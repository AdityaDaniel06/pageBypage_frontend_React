import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function PChart() {
  const data = [
    { age: "5+ years", value: 1, color: "#ef4444" },
    { age: "8+ years", value: 2, color: "#f97316" },
    { age: "10+ years", value: 3, color: "#eab308" },
    { age: "13+ years", value: 4, color: "#84cc16" },
    { age: "18+ years", value: 5, color: "#22c55e" },
    { age: "21+ years", value: 6, color: "#14b8a6" },
    { age: "30+ years", value: 7, color: "#3b82f6" },
    { age: "60+ years", value: 10, color: "#a855f7" },
  ];
  return (
    <div className="w-full md:w-1/2">
      <h2 className="mb-4 text-center text-lg font-bold text-emerald-600">
        Age Group of Readers
      </h2>
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="age"
            cx="55%"
            cy="50%"
            innerRadius={85}
            outerRadius={110}
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                key={entry?.age}
                fill={entry?.color}
                stroke={entry?.color}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="40%"
            layout="vertical"
            iconSize={12}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PChart;
