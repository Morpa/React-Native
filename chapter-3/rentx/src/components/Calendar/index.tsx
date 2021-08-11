import React from 'react'
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler
} from 'react-native-calendars'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { ptBR } from '../../utils/localeConfig'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

type DayProps = {
  dateString: string
  day: number
  month: number
  year: number
  timestamp: number
}

type MarkedDateProps = {
  [date: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disableTouchEvent?: boolean
  }
}

type CalendarProps = {
  markedDates: MarkedDateProps
  onDayPress: DateCallbackHandler
}

const Calendar = ({ markedDates, onDayPress }: CalendarProps) => {
  const theme = useTheme()

  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={theme.colors.text}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.backgroundSecondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.textDetail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary500,
        textDayHeaderFontFamily: theme.fonts.primary500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.secondary600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  )
}

export { Calendar, MarkedDateProps, DayProps }
