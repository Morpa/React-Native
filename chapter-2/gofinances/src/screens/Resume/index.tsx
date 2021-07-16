import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { VictoryPie } from 'victory-native'

import { HistoryCard } from '../../components/HistoryCard'
import { categories } from '../../utils/categories'
import { formatValue } from '../../utils/format-values'

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
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>([])

  const loadData = async () => {
    const dataKey = '@gofinances:transactions'
    const response = await AsyncStorage.getItem(dataKey)
    const responseFormatted = response ? JSON.parse(response) : []

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) => expensive.amountType === 'negative'
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
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <S.Container>
      <S.Header>
        <S.Title>Resumo por categoria</S.Title>
      </S.Header>

      <S.Content>
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
    </S.Container>
  )
}
