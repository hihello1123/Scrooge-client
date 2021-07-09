import React, { useEffect } from 'react';
import AppRouter from './components/Router';

require('dotenv').config();

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
