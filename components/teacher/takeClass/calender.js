import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";

const Calendar = () => {
  const calendarRef = useRef(null);

  return (
    <div className="border border-slate-200 bg-[#f7fafc] p-4 rounded-lg">
        <FullCalendar
          innerRef={calendarRef}
          plugins={[timeGridPlugin,dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          editable
          selectable
          height={550}
          events={[
            {
              title  : 'event1',
              start  : '2022-05-17T02:54:00',
            },
            {
              title  : 'event2',
              start  : '2022-05-23T11:00:00',
            },
            {
              title  : 'event3',
              start  : '2022-05-21T12:30:00',
            }
          ]}
        />
    </div>
  );
};

export default Calendar;
