import React, { useEffect, useState } from 'react';
import Topper from '../components/Topper';
import { useDispatch, useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import { navEffect, monthlyData } from '../actions';

function Monthly() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;
  const monthlyReducer = useSelector((state) => state.monthlyReducer);
  const { data } = monthlyReducer.monthlyData;
  const [isModal, setModal] = useState(false);
  const [dayInfo, setDayInfo] = useState({
    cost: '',
    date: '',
  });

  useEffect(() => {
    let url = new URL(window.location.href);
    dispatch(navEffect(url.pathname));

    dispatch(monthlyData(accessToken));
  }, [dispatch]);

  return (
    <div className="container">
      <Topper />
      <FullCalendar
        height={'auto'}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridDay,dayGridWeek,dayGridMonth',
        }}
        events={data}
        eventClick={(info) => {
          console.log(info.event.startStr);
          setModal(!isModal);
        }}
        eventMouseEnter={(info) =>
          setDayInfo({
            cost: info.event.title,
            date: info.event.startStr,
          })
        }
      />
      {isModal ? (
        <div className="monthlyModal" onClick={() => setModal(!isModal)}>
          <div className="monthlyModal_inner date">{dayInfo.date}</div>
          <div className="monthlyModal_inner cost">금액은 {dayInfo.cost}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Monthly;
