import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import Background from '../../assets/img/pattern-bg.png';
import Arrow from '../../assets/img/icon-arrow.svg';
import api from '../../services/api';

function Header({ setPosition }) {
    const [ip, setIp] = useState('');
    const dispatch = useDispatch();
    const apiKey = process.env.REACT_APP_API_KEY;

    //FUNÇÃO QUE AO SER EXECUTADA ENVIA OS DISPATCHS CONFORME A RESPOSTA DA API
    async function handleGetDataByIp(e) {
        e.preventDefault();
        dispatch({ type: 'REQUEST_FETCHING' })
        api.get(`/v1?apiKey=${apiKey}&ipAddress=${ip}`)
            .then(({ data }) => { 
    
                dispatch({ type: 'REQUEST_SUCCESS', payload: data }) 
                setPosition({
                    //MUDA A POSIÇÃO DO MAPA
                    lat:data.location.lat,
                    lng:data.location.lng
                })
            })
            .catch(error => dispatch({ type: 'REQUEST_ERROR' }))
    }
    return (
        <Fragment>
            <S.Container bgUrl={Background}>
                <S.Title>IP Address Tracker</S.Title>
                <S.FormArea onSubmit={handleGetDataByIp}>
                    <S.Input type="text" value={ip} onChange={(e) => setIp(e.target.value)} />
                    <S.Button type="submit">
                        <img src={Arrow} alt='search' />
                    </S.Button>
                </S.FormArea>
            </S.Container>
        </Fragment>
    );
}

export default Header;