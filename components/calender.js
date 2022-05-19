import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);
  
  return (
    <div className="bg-white p-6 rounded-lg border border-[#bee1fa]">
        <FullCalendar
          innerRef={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin]}
          editable
          selectable
          height={550}
          events={[
            { title: 'Event 1', date: '2022-05-19' },
            { title: 'Event 2', date: '2022-05-21' }
          ]}
        />
    </div>
  );
};

export default Calendar;
