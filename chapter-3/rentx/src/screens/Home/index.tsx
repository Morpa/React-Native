import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { CarCard } from '../../components/CarCard'

import * as S from './styles'

export const Home = () => {
  const carData = {
    brand: 'Audi',
    name: 'R8 Spyder',
    rent: {
      period: 'Ao dia',
      price: 800
    },
    thumbnail:
      'https://www.real-luxury.com/media/tz_portfolio_plus/article/cache/noleggio-audi-r8-spyder-35-1_xl.png'
  }

  return (
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
      <CarCard
        brand={carData.brand}
        name={carData.name}
        rent={carData.rent}
        thumbnail={carData.thumbnail}
      />
      <CarCard
        brand={carData.brand}
        name={carData.name}
        rent={carData.rent}
        thumbnail={carData.thumbnail}
      />
    </S.Container>
  )
}
