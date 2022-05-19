import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <div className="bg-white p-6 rounded-lg">
        <FullCalendar
          innerRef={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin]}
          editable
          selectable
          height={550}
        />
    </div>
  );
};

export default Calendar;
