import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
const axios = require('axios')

function App() {
  const [char, setchar] = useState([])
  const [loc, setloc] = useState([])
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (res) {
        console.log(res.data.results);
        setchar(res.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
    axios.get('https://rickandmortyapi.com/api/location')
      .then(function (res) {
        console.log(res.data.results);
        setloc(res.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
  })
  return (
    <div className="App">
      {
        char.map((item) => {
          return (
            <div className='row'>
              <div className='flex col-6'>
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div className='main '>
                  <h2>{item.name}</h2>
                  <h4>{item.gender}</h4>
                  <div className='flex1'>
                    <h5>{item.status}</h5> -
                    <h5>{item.species}</h5>
                  </div>
                  <h4>{item.type}</h4>
                  <br></br>
                  <h5>Last known location:</h5>
                  <h4>{item.location.name}</h4>
                  <br></br>
                  <h4>{item.origin.name}</h4>
                  <br />
                  {/* {
                    loc.map((item) => {
                      return (
                        <>
                        
                          <h2>{item.name}</h2>
                        </>
                      )
                    })
                  } */}
                </div>
              </div>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
