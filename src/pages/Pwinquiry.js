import React, { useEffect } from 'react';
import Topper from '../components/Topper';
import { useDispatch } from 'react-redux';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { navEffect } from '../actions';

function Pwinquiry() {
  const dispatch = useDispatch();

  return <div>하하하..</div>;
}

export default Pwinquiry;
