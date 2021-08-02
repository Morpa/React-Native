import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'
import ArrowSvg from '../../assets/arrow.svg'

import * as S from './styles'

export const Scheduling = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingDetails')
  }

  return (
    <S.Container>
      <S.Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={() => { }} color={theme.colors.shape} />

        <S.Title>
          Escolha uma {'\n'}
          data de início e {' \n'}
          fim do aluguel
        </S.Title>

        <S.RentailPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={false}>30/08/2021</S.DateValue>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue selected={false}>30/08/2021</S.DateValue>
          </S.DateInfo>
        </S.RentailPeriod>
      </S.Header>

      <S.Content>
        <Calendar />
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  )
}
