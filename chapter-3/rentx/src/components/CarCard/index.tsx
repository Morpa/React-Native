import React from 'react'

import GasolineFuel from '../../assets/gasoline.svg'

import * as S from './styles'

type CarProps = {
  brand: string
  name: string
  thumbnail: string
}

type RentProps = {
  period: string
  price: number
}

type CarCardProps = {
  carDetails: CarProps
  rentDetails: RentProps
}

export const CarCard = ({ carDetails, rentDetails }: CarCardProps) => {
  return (
    <S.Container>
      <S.Details>
        <S.Brand>{carDetails.brand}</S.Brand>
        <S.Name>{carDetails.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{rentDetails.period}</S.Period>
            <S.Price>{`${rentDetails.price} €`}</S.Price>
          </S.Rent>

          <S.Type>
            <GasolineFuel />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CardImage
        source={{ uri: carDetails.thumbnail }}
        resizeMode="contain"
      />
    </S.Container>
  )
}
