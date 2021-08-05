import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { CarCard, CarCardProps } from '../../components/CarCard'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'
import { carCardMapper } from '../../utils/mappers'

import * as S from './styles'

export type CarProps = {
  id: string
  brand: string
  name: string
  about: string
  fuel_type: string
  thumbnail: string
  rent: {
    period: string
    price: number
  }
  accessories: {
    id: string
    type: string
    name: string
  }[]
  photos: string[]
}

export type CarStateProps = Pick<CarCardProps, 'carDetails' | 'rentDetails'> &
  CarProps

export const Home = () => {
  const [cars, setCars] = useState<CarStateProps[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  const handleCarDetails = (car: CarStateProps) => {
    navigation.navigate('CarDetails', { car })
  }

  const fetchCars = async () => {
    try {
      const { data } = await api.get('cars')

      const responseFormated = carCardMapper(data)

      setCars(responseFormated)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

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

      {loading ? (
        <Loading />
      ) : (
        <S.CarList
          data={cars}
          keyExtractor={(item) => item.carDetails.id}
          renderItem={({ item }) => (
            <CarCard
              carDetails={item.carDetails}
              rentDetails={item.rentDetails}
              onPress={() => handleCarDetails(item)}
            />
          )}
        />
      )}
    </S.Container>
  )
}
