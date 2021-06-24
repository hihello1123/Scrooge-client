import axios from 'axios';
import { useEffect, useState } from 'react';
require('dotenv').config();

function App() {
  const [hi, setHi] = useState('');
  useEffect(() => {
    axios
      .get('http://ec2-15-164-213-161.ap-northeast-2.compute.amazonaws.com/')
      .then((res) => {
        setHi(res.data);
      });
  }, []);
  return <div className="App">{hi}</div>;
}

export default App;
