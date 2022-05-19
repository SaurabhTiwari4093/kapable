import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <div>
        <FullCalendar
          innerRef={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin]}
          editable
          selectable
          height={500}
        />
    </div>
  );
};

export default Calendar;
