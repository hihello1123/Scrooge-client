import React, { useEffect } from 'react';
import AppRouter from './components/Router';
import { useDispatch, useSelector } from 'react-redux';
import {} from './actions';

require('dotenv').config();

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
