import { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="row-start-2">
      <ReactCalendar onChange={onChange} value={value} />
    </div>
  );
}

export default Calendar;
