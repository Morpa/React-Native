import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Accessory } from '../../components/Accessory'
import { Button } from '../../components/Button'
import { CarStateProps } from '../Home'

import { getAccessoryIcon } from '../../utils/getAccessoryIcon'

import * as S from './styles'

type Params = {
  car: CarStateProps
}

export const CarDetails = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const { car } = route.params as Params

  const handleBack = () => {
    navigation.goBack()
  }

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling')
  }
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imageUrl={car.photos} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.carDetails.brand}</S.Brand>
            <S.Name>{car.carDetails.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rentDetails.period}</S.Period>
            <S.Price>{car.rentDetails.price} €</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </S.Accessories>

        <S.About>{car.about}</S.About>
      </S.Content>

      <S.Footer>
        <Button
          title="Escolher o período do aluguel"
          onPress={handleConfirmRental}
        />
      </S.Footer>
    </S.Container>
  )
}
