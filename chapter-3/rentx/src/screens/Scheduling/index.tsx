import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { format } from 'date-fns'

import { BackButton } from '../../components/BackButton'
import { CarStateProps } from '../Home'
import { Button } from '../../components/Button'
import { Calendar, DayProps, MarkedDateProps } from '../../components/Calendar'
import ArrowSvg from '../../assets/arrow.svg'
import { generateInterval } from '../../utils/generateInterval'

import * as S from './styles'

type Params = {
  car: CarStateProps
}

type RentalPeriod = {
  startFormatted: string
  endFormatted: string
}

export const Scheduling = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  )
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  )

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  )

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const { car } = route.params as Params

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates)
    })
  }

  const handleBack = () => {
    navigation.goBack()
  }

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
    let end = date

    if (start.timestamp > end.timestamp) {
      start = end
      end = start
    }

    setLastSelectedDate(end)
    const interval = generateInterval(start, end)
    setMarkedDates(interval)

    const firstDate = Object.keys(interval)[0]
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

    setRentalPeriod({
      startFormatted: format(new Date(firstDate), 'dd/MM/yyyy'),
      endFormatted: format(new Date(endDate), 'dd/MM/yyyy')
    })
  }

  return (
    <S.Container>
      <S.Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />

        <S.Title>
          Escolha uma {'\n'}
          data de início e {' \n'}
          fim do aluguel
        </S.Title>

        <S.RentailPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </S.DateValue>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </S.DateValue>
          </S.DateInfo>
        </S.RentailPeriod>
      </S.Header>

      <S.Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  )
}
