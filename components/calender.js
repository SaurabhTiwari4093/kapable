import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Calender() {

  const localizer = momentLocalizer(moment);

  const myEventsList = [
    { start: new Date(), end: new Date(), title: "Take class of Saurabh"}
  ];
  
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{height:"500px"}}
      /> 
    </div>
  )
}
