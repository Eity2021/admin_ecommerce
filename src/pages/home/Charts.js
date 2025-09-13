import LineBarChart from "./LineBarChart";
import WidthBarCharts from "./WidthBarCharts";

export default function Charts() {
  return (
    <div className="container mx-auto md:p-0 p-6 mb-6">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full">
        <div className="">
          {/* <title className="pl-20 pb-1 text-[26px] font-roboto font-semibold">
            Recent Order
          </title> */}
          <LineBarChart></LineBarChart>
        </div>
        <WidthBarCharts></WidthBarCharts>
      </div>
    </div>
  );
}
