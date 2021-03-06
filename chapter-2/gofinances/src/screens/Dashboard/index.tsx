import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTheme } from 'styled-components'

import { HighlightCard } from '../../components/HighlightCard'
import {
  TransactionCard,
  TransactionDataProps
} from '../../components/TransactionCard'
import { formatValue } from '../../utils/format-values'

export type DataListProps = {
  id: string
} & TransactionDataProps

type HighlightProps = {
  amout: string
  lastTransaction: string
}

type HighlightData = {
  entries: HighlightProps
  expensives: HighlightProps
  total: HighlightProps
}

import * as S from './styles'
import { useAuth } from '../../hooks/use-auth'

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [transactions, setTransactions] = useState<DataListProps[]>([])
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  )

  const theme = useTheme()
  const { signOut, user } = useAuth()

  const getLastTransactionDate = (
    collection: DataListProps[],
    type: 'positive' | 'negative'
  ) => {
    const collectionFiltered = collection.filter(
      (transaction) => transaction.amountType === type
    )

    if (collectionFiltered.length === 0) {
      return 0
    }

    const lastTransaction = new Date(
      Math.max.apply(
        Math,
        collectionFiltered.map((transaction) =>
          new Date(transaction.date).getTime()
        )
      )
    )

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      'pt-PT',
      { month: 'long' }
    )}`
  }

  const loadTransactions = useCallback(async () => {
    const dataKey = `@gofinances:transactions_user:${user.id}`
    const response = await AsyncStorage.getItem(dataKey)
    const transactionsLoaded = response ? JSON.parse(response) : []

    let entriesTotal = 0
    let expensiveTotal = 0

    const transactionsFormatted: DataListProps[] = transactionsLoaded.map(
      (transaction: DataListProps) => {
        if (transaction.amountType === 'positive') {
          entriesTotal += Number(transaction.amount)
        } else {
          expensiveTotal += Number(transaction.amount)
        }

        const amount = formatValue(Number(transaction.amount))

        const date = Intl.DateTimeFormat('pt-PT', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        }).format(new Date(transaction.date))

        return {
          id: transaction.id,
          amountType: transaction.amountType,
          name: transaction.name,
          amount,
          category: transaction.category,
          date
        }
      }
    )

    setTransactions(transactionsFormatted)

    const lastTransactionEntries = getLastTransactionDate(
      transactionsLoaded,
      'positive'
    )

    const lastTransactionExpensives = getLastTransactionDate(
      transactionsLoaded,
      'negative'
    )

    const totalInterval = `01 a ${lastTransactionExpensives}`

    setHighlightData({
      entries: {
        amout: formatValue(entriesTotal),
        lastTransaction:
          lastTransactionEntries === 0
            ? 'Ainda n??o h?? transa????es'
            : `??ltima entrada dia ${lastTransactionEntries}`
      },
      expensives: {
        amout: formatValue(expensiveTotal),
        lastTransaction:
          lastTransactionEntries === 0
            ? 'Ainda n??o h?? transa????es'
            : `??ltima sa??da dia ${lastTransactionExpensives}`
      },
      total: {
        amout: formatValue(entriesTotal - expensiveTotal),
        lastTransaction:
          lastTransactionEntries === 0
            ? 'Ainda n??o h?? transa????es'
            : totalInterval
      }
    })

    setIsLoading(false)
  }, [user.id])

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  useFocusEffect(
    useCallback(() => {
      loadTransactions()
    }, [loadTransactions])
  )

  return (
    <S.Container>
      {isLoading ? (
        <S.LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </S.LoadContainer>
      ) : (
        <>
          <S.Header>
            <S.UserWrapper>
              <S.UserInfo>
                <S.Photo
                  source={{
                    uri: user.photo
                  }}
                />
                <S.User>
                  <S.UserGreeting>Ol??,</S.UserGreeting>
                  <S.UserName>{user.name}</S.UserName>
                </S.User>
              </S.UserInfo>

              <S.LogoutButton onPress={signOut}>
                <S.Icon name="power" />
              </S.LogoutButton>
            </S.UserWrapper>
          </S.Header>
          <S.HighlightCards>
            <HighlightCard
              cardType="movements"
              iconType="up"
              titlle="Entradas"
              amount={highlightData.entries.amout}
              lastTransaction={highlightData.entries.lastTransaction}
            />
            <HighlightCard
              cardType="movements"
              iconType="down"
              titlle="Sa??das"
              amount={highlightData.expensives.amout}
              lastTransaction={highlightData.expensives.lastTransaction}
            />
            <HighlightCard
              cardType="total"
              iconType="total"
              titlle="Total"
              amount={highlightData.total.amout}
              lastTransaction={highlightData.total.lastTransaction}
            />
          </S.HighlightCards>
          <S.Transactions>
            <S.Title>Listagem</S.Title>

            <S.TransactionsList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </S.Transactions>
        </>
      )}
    </S.Container>
  )
}
