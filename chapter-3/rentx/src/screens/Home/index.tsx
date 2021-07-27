import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'

import * as S from './styles'

export const Home = () => (
  <S.Container>
    <StatusBar
      barStyle="light-content"
      translucent
      backgroundColor="transparent"
    />
    <S.Header>
      <S.HeaderContent>
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <S.TotalCars>Total de 12 carros</S.TotalCars>
      </S.HeaderContent>
    </S.Header>
  </S.Container>
)
