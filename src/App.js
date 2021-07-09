import React from 'react';
import AppRouter from './components/Router';
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
