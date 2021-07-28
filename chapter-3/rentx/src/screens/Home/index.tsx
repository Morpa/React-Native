import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { CarCard } from '../../components/CarCard'

import * as S from './styles'

export const Home = () => {
  const carData = {
    carDetails: {
      brand: 'Audi',
      name: 'R8 Spyder',
      thumbnail:
        'https://www.real-luxury.com/media/tz_portfolio_plus/article/cache/noleggio-audi-r8-spyder-35-1_xl.png'
    },
    rentDetails: {
      period: 'Ao dia',
      price: 800
    }
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

      <S.CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <CarCard
            carDetails={carData.carDetails}
            rentDetails={carData.rentDetails}
          />
        )}
      />
    </S.Container>
  )
}
