import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

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
} & RectButtonProps

export const CarCard = ({
  carDetails,
  rentDetails,
  ...props
}: CarCardProps) => {
  return (
    <S.Container {...props}>
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
