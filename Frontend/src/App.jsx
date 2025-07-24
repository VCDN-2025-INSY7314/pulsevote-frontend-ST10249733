import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
      axios.get('http://localhost:5000/test')
      .then(Response => {
        setBackendMessage(Response.data.message);
      })
      .catch(error => {
        console.error("Error fetching backend data:", error);
      });
  }, []);

  return (
    <>
      <h2>Welcome to PulseVote!</h2>
      <p>{backendMessage}</p>
    </>
  );
}

export default App
