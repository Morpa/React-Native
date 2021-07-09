import React from 'react'

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
  const data: DataListProps[] = [
    {
      id: '1',
      amountType: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 1.259,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: '03/04/2021'
    },
    {
      id: '2',
      amountType: 'negative',
      title: 'Desenvolvimento de site',
      amount: 'R$ 255,00',
      category: {
        name: 'Aluguel',
        icon: 'home'
      },
      date: '03/04/2021'
    },
    {
      id: '3',
      amountType: 'negative',
      title: 'Rango',
      amount: 'R$ 259,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date: '03/04/2021'
    }
  ]

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
          <S.Icon name="power" />
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
