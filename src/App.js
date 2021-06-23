import axios from 'axios';
import { useEffect, useState } from 'react';
require('dotenv').config();

function App() {
  const [hi, setHi] = useState('');
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/').then((res) => {
      setHi(res.data);
    });
  }, []);
  return <div className="App">{hi}</div>;
}

export default App;
