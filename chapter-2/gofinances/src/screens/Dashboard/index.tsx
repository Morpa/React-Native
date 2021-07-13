import React, { useCallback, useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { HighlightCard } from '../../components/HighlightCard'
import {
  TransactionCard,
  TransactionDataProps
} from '../../components/TransactionCard'

export type DataListProps = {
  id: string
} & TransactionDataProps

import * as S from './styles'

export const Dashboard = () => {
  const [data, setData] = useState<DataListProps[]>([])

  const loadTransactions = async () => {
    const dataKey = '@gofinances:transactions'

    const response = await AsyncStorage.getItem(dataKey)

    const transaction = response ? JSON.parse(response) : []

    const transactionsFormatted: DataListProps[] = transaction.map(
      (transaction: DataListProps) => {
        const amount = Number(transaction.amount).toLocaleString('pt-PT', {
          style: 'currency',
          currency: 'EUR'
        })

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

    setData(transactionsFormatted)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadTransactions()
    }, [])
  )

  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/15898709?v=4'
              }}
            />
            <S.User>
              <S.UserGreeting>Olá,</S.UserGreeting>
              <S.UserName>Morpa</S.UserName>
            </S.User>
          </S.UserInfo>

          <S.LogoutButton
            onPress={() => {
              console.log('object')
            }}
          >
            <S.Icon name="power" />
          </S.LogoutButton>
        </S.UserWrapper>
      </S.Header>

      <S.HighlightCards>
        <HighlightCard
          cardType="movements"
          iconType="up"
          titlle="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          cardType="movements"
          iconType="down"
          titlle="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          cardType="total"
          iconType="total"
          titlle="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </S.HighlightCards>

      <S.Transactions>
        <S.Title>Listagem</S.Title>

        <S.TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </S.Transactions>
    </S.Container>
  )
}
