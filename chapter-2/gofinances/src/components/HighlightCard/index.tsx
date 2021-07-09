import React from 'react'

import * as S from './styles'

export type HighlightCardProps = {
  cardType: 'movements' | 'total'
  iconType: 'up' | 'down' | 'total'
  titlle: string
  amount: string
  lastTransaction: string
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export const HighlightCard = ({
  titlle,
  amount,
  lastTransaction,
  cardType,
  iconType
}: HighlightCardProps) => {
  return (
    <S.Container cardType={cardType}>
      <S.Header>
        <S.Title cardType={cardType}>{titlle}</S.Title>
        <S.Icon name={icon[iconType]} iconType={iconType} />
      </S.Header>

      <S.Footer>
        <S.Amount cardType={cardType}>{amount}</S.Amount>
        <S.LastTransaction cardType={cardType}>
          {lastTransaction}
        </S.LastTransaction>
      </S.Footer>
    </S.Container>
  )
}
