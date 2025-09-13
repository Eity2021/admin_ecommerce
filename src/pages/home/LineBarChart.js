import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400, profit: 240 },
  { name: "Feb", sales: 300, profit: 221 },
  { name: "Mar", sales: 200, profit: 229 },
  { name: "Apr", sales: 278, profit: 200 },
  { name: "May", sales: 189, profit: 218 },
  { name: "Jun", sales: 239, profit: 250 },
];
export default function LineBarChart() {
  return (
    <div>
      <div className="w-full h-96 bg-white">
        {" "}
        {/* Tailwind দিয়ে container height */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* Background grid */}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

            {/* X-axis & Y-axis */}
            <XAxis dataKey="name" />
            <YAxis />

            {/* Hover info */}
            <Tooltip />

            {/* Legend */}
            <Legend />

            {/* Lines */}
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#82ca9d"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
