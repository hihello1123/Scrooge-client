import React, { useEffect } from 'react';
import Topper from '../components/Topper';
import { useDispatch } from 'react-redux';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { navEffect } from '../actions';
function Monthly() {
  const dispatch = useDispatch();

  useEffect(() => {
    let url = new URL(window.location.href);
    dispatch(navEffect(url.pathname));
  }, [dispatch]);

  return (
    <div className="container">
      <Topper />
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
}

export default Monthly;
