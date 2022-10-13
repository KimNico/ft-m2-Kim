import React, { useState } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About';
import { Route,Switch } from 'react-router-dom';
import Ciudad from '../components/Ciudad'

const apiKey = '070d5956b3be7bc9696e1ef3b683db79';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
function onFilter(ciudadId){
  let ciudad = cities.find(c=>c.id === parseInt(ciudadId))
  return ciudad
}

  return (
    <div className="App">    
     <Nav onSearch={onSearch}/>
   
          <Switch>
            <Route exact path="/">
              <Cards
                cities={cities}
                onClose={onClose}
              />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path={`/ciudad/:id`}
            render={ ( {match} ) => <Ciudad city={onFilter(match.params.id)}/>}
            >
              
              
            </Route>
          </Switch>
 
    
    </div>
  );
}

export default App;


