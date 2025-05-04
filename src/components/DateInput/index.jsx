import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

export function DateInput({ selectedDate, onDateChange }) {

  // Função para bloquear sábados (6) e domingos (0)
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div className="flex flex-col gap-1 w-full lg:w-60">
      <label className="text-white text-sm font-medium ml-4">Data</label>
      <div className="flex items-center justify-between bg-white rounded-full px-4 py-2 shadow-sm">
        <DatePicker
          selected={selectedDate}
          onChange={onDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/AAAA"
          filterDate={isWeekday}
          className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
        />
        <FiCalendar className="text-gray-400 ml-2" size={20} />
      </div>
    </div>
  );
};

export default DateInput;
