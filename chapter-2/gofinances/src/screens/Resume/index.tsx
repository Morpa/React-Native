import React, { useCallback, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { VictoryPie } from 'victory-native'
import { addMonths, subMonths, format } from 'date-fns'
import { pt } from 'date-fns/locale'
import { useFocusEffect } from '@react-navigation/native'

import { HistoryCard } from '../../components/HistoryCard'
import { categories } from '../../utils/categories'
import { formatValue } from '../../utils/format-values'
import { useAuth } from '../../hooks/use-auth'

import * as S from './styles'

type TransactionData = {
  amountType: 'positive' | 'negative'
  name: string
  amount: string
  category: string
  date: string
}

type CategoryData = {
  key: string
  name: string
  total: number
  totalFormatted: string
  color: string
  percent: string
}

export const Resume = () => {
  const theme = useTheme()
  const [isLoading, setIsLoading] = useState(false)
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([])
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { signOut, user } = useAuth()

  const handleDateChange = (action: 'previous' | 'next') => {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1))
    } else {
      setSelectedDate(subMonths(selectedDate, 1))
    }
  }

  const loadData = useCallback(async () => {
    setIsLoading(true)

    const dataKey = `@gofinances:transactions_user:${user.id}`
    const response = await AsyncStorage.getItem(dataKey)
    const responseFormatted = response ? JSON.parse(response) : []

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) =>
        expensive.amountType === 'negative' &&
        new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    )

    const expensiveTotal = expensives.reduce(
      (acumullator: number, expensive: TransactionData) => {
        return acumullator + Number(expensive.amount)
      },
      0
    )

    const totalByCategory: CategoryData[] = []

    categories.forEach((category) => {
      let categorySum = 0

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount)
        }
      })

      if (categorySum > 0) {
        const totalFormatted = formatValue(categorySum)

        const percent = `${((categorySum / expensiveTotal) * 100)?.toFixed(0)}%`

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
          percent
        })
      }
    })

    setTotalByCategories(totalByCategory)

    setIsLoading(false)
  }, [selectedDate])

  useFocusEffect(
    useCallback(() => {
      loadData()
    }, [loadData])
  )

  return (
    <S.Container>
      <S.Header>
        <S.Title>Resumo por categoria</S.Title>
      </S.Header>
      {isLoading ? (
        <S.LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </S.LoadContainer>
      ) : (
        <S.Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            // eslint-disable-next-line react-hooks/rules-of-hooks
            paddingBottom: useBottomTabBarHeight()
          }}
        >
          <S.MonthSelect>
            <S.MonthSelectButton onPress={() => handleDateChange('previous')}>
              <S.MonthSelectIcon name="chevron-left" />
            </S.MonthSelectButton>

            <S.Month>
              {format(selectedDate, 'MMMM, yyyy', { locale: pt })}
            </S.Month>

            <S.MonthSelectButton onPress={() => handleDateChange('next')}>
              <S.MonthSelectIcon name="chevron-right" />
            </S.MonthSelectButton>
          </S.MonthSelect>

          <S.ChartContainer>
            <VictoryPie
              data={totalByCategories}
              colorScale={totalByCategories.map((category) => category.color)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  fill: theme.colors.shape
                }
              }}
              labelRadius={50}
              x="percent"
              y="total"
            />
          </S.ChartContainer>

          {totalByCategories.map((item) => (
            <HistoryCard
              key={item.key}
              title={item.name}
              amount={item.totalFormatted}
              color={item.color}
            />
          ))}
        </S.Content>
      )}
    </S.Container>
  )
}
