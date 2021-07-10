import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteModalMessage } from './actions';
import AppRouter from './components/Router';

require('dotenv').config();

function App() {
  const modalMessageReducer = useSelector((state) => state.modalMessageReducer);
  const { message, errored } = modalMessageReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  });

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => document.removeEventListener('mousedown', handleClick, false);
  });

  const handleClick = () => {
    dispatch(deleteModalMessage());
  };

  return (
    <>
      <AppRouter />

      {errored ? (
        <div className="homeModal">
          <div className="homeModal_message">{message}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
