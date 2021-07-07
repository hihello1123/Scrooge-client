import React from 'react';
import Topper from '../components/Topper';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

function Monthly() {
  return (
    <div className="container">
      <Topper />
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}

export default Monthly;
