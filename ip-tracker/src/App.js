import 'leaflet/dist/leaflet.css';
import React, { Fragment, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Provider } from 'react-redux';
import Header from './components/Header';
import LocalInformation from './components/LocalInformation';
import MapRender from './components/MapRender';
import './Global.css';
import store from './store';

function App() {
  const [position, setPosition] = useState({lat:0,lng:0});
  useEffect(() => {
    //INICIALMENTE PEGA AS INFORMACOES DO LOCAL
  
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setPosition({
        lat: coords.longitude,
        lng: coords.latitude,
      })
    });
  
  }, []);

  return (
    <Fragment>
      <Provider store={store}>  {/* PROVIDER DO REDUX */}
        <Header setPosition={setPosition} /> {/*HEADER ONDE ESTÁ O INPUT DE BUSCA*/}
        <LocalInformation /> {/*COMPONENTE QUE MOSTRA AS INFORMACOES DO LOCAL*/}
          <MapRender position={position} />
      </Provider>
    </Fragment>
  );
}

export default App;
