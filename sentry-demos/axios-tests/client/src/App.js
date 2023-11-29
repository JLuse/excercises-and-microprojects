import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import * as Sentry from "@sentry/react";


function App() {


const [food, setFood] = useState("")

// useEffect(() => {
//   Promise.all([
//     axios.get('http://127.0.0.1:8000/api/foodfsdfd')
//   ])
//   .then((res) => {
//     setFood(res[0].data.message)
//   })
  
// }, [])

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/dasdasd');
      setFood(res.data.message);
    } catch (err) {
      // Handle error here
      Sentry.captureException(err);
      console.error(err);
    }
  };

  fetchData();
}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {food ? <h1>First food is {food[0]}</h1> : null}
      </header>
    </div>
  );
}

export default App;
