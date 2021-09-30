import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';

function LocalInformation() {
  const state = useSelector(state=>state.state);

  return (
    <S.Container>
      <S.InformationArea>
        <S.InformationTitle>
          IP ADDRESS
        </S.InformationTitle>
        <S.InformationContent>
          {state?.ip}
        </S.InformationContent>
      </S.InformationArea>
      <S.InformationArea>
        <S.InformationTitle>
          LOCATION
        </S.InformationTitle>
        <S.InformationContent>
          {state?.location.city}
        </S.InformationContent>
      </S.InformationArea>
      <S.InformationArea>
        <S.InformationTitle>
          TIMEZONE
        </S.InformationTitle>
        <S.InformationContent>
          {state?.location.timezone}
        </S.InformationContent>
      </S.InformationArea>
      <S.InformationArea>
        <S.InformationTitle>
          ISP
        </S.InformationTitle>
        <S.InformationContent>
        {state?.as?.name}
        </S.InformationContent>
      </S.InformationArea>
    </S.Container>
  );
}

export default LocalInformation;