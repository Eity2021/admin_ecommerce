import React, { useState, useRef, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { ChevronRight, ChevronLeft } from "lucide-react";
const CustomCalender = ({ onSelect }) => {
  const [show, setShow] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const ref = useRef();

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderDays = () =>
    daysOfWeek.map((d) => (
      <div key={d} className="text-xs font-bold text-center text-gray-500">
        {d}
      </div>
    ));

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= monthEnd || days.length % 7 !== 0) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const isSelected = isSameDay(day, selectedDate);
        days.push(
          <div
            key={day}
            className={`text-center p-2 text-sm cursor-pointer border border-transparent hover:bg-blue-100 ${
              !isSameMonth(day, monthStart) ? "text-gray-300" : ""
            } ${isSelected ? "bg-blue-500 text-white rounded-full" : ""}`}
            onClick={() => {
              setSelectedDate(cloneDay);
              onSelect(cloneDay);
              setShow(false);
            }}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div className="grid grid-cols-7">{days}</div>);
      days = [];
    }
    return rows;
  };

  return (
    <div className="form-control w-full " ref={ref}>
      <input
        type="text"
        readOnly
        className="input input-bordered w-full cursor-pointer border border-[#e0e0e0] py-2 rounded-[6px] px-2 hover:border-[#e0e0e0] focus:outline-none focus:ring-1 focus:ring-primary"
        value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
        onClick={() => setShow(!show)}
        placeholder="Pick a date"
      />
      {show && (
        <div className="absolute mt-2 bg-white shadow-lg border rounded-md z-50 w-72 p-3">
          <div className="flex justify-between mb-2 items-center">
            <button
              className="btn btn-sm btn-outline"
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            >
              <ChevronLeft />
            </button>
            <h2 className="font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
            <button
              className="btn btn-sm btn-outline"
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            >
              <ChevronRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">{renderDays()}</div>
          <div>{renderCells()}</div>
        </div>
      )}
    </div>
  );
};

export default CustomCalender;
