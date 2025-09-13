import LineBarChart from "./LineBarChart";
import WidthBarCharts from "./WidthBarCharts";

export default function Charts() {
  return (
    <div className="container mx-auto md:p-0 p-6 mb-6">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
        <LineBarChart></LineBarChart>
        <WidthBarCharts></WidthBarCharts>
      </div>
    </div>
  );
}
