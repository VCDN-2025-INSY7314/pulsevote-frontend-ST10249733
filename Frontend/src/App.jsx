import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

// This is the main functional component for the React app
function App() {
  // useState is a React Hook that defines a state variable named 'backendMessage'
  // It starts with an empty string and will be updated later with data from the backend
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Send a GET request to the backend API endpoint at http://localhost:5000/test
      axios.get('http://localhost:5000/test')
      .then(Response => {
        // If the request succeeds, set the 'backendMessage' state with the message returned from the backend
        setBackendMessage(Response.data.message);
      })
      .catch(error => {
        // If there's an error (like backend not running), log it to the browser console
        console.error("Error fetching backend data:", error);
      });
  }, []);  // The empty array means this useEffect runs only once when the component first loads

  return (
    <>
      <h2>Welcome to PulseVote!</h2>
      <p>{backendMessage}</p>
    </>
  );
}

export default App
