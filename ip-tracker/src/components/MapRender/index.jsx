import React, { Fragment } from 'react';

import { MapContainer, Marker, TileLayer, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import localImg from '../../assets/img/icon-location.svg'
import * as S from './styles';

//CUSTOMIZANDO O ICONE QUE VEM DA API DO LEAFLET
const Icon = new L.Icon({
  iconUrl: localImg,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
})

//FUNCAO QUE MUDA O 'CENTRO' DO MAPA DE FORMA DINAMICA
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}


function MapRender({ position }) {
  const { lat, lng } = position;
  
  if(position){
    return (
      <Fragment>
        <S.Container>
          <MapContainer center={[lat,lng]} zoom={13}>
          <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          <ChangeView center={[lat,lng]} zoom={13} />
          <Marker position={[lat,lng]} icon={Icon}/>
          </MapContainer>
        </S.Container>
      </Fragment>
    );
  }
  
}


export default MapRender;