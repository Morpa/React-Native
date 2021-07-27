import React from 'react'

import GasolineFuel from '../../assets/gasoline.svg'

import * as S from './styles'

type CarCardProps = {
  brand: string
  name: string
  rent: {
    period: string
    price: number
  }
  thumbnail: string
}

export const CarCard = ({ brand, name, rent, thumbnail }: CarCardProps) => {
  return (
    <S.Container>
      <S.Details>
        <S.Brand>{brand}</S.Brand>
        <S.Name>{name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{rent.period}</S.Period>
            <S.Price>{`${rent.price} €`}</S.Price>
          </S.Rent>

          <S.Type>
            <GasolineFuel />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CardImage source={{ uri: thumbnail }} resizeMode="contain" />
    </S.Container>
  )
}
