import React from 'react';

import * as S from './style'

export type HighlightCardProps = {
  cardType: 'up' | 'down' | 'total';
  titlle: string;
  amount: string;
  lastTransaction: string;
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
}

export const HighlightCard = ({ titlle, amount, lastTransaction, cardType }: HighlightCardProps) => {
  return (
    <S.Container cardType={cardType}>
      <S.Header>
        <S.Title cardType={cardType}>
          {titlle}
        </S.Title>
        <S.Icon
          name={icon[cardType]}
          cardType={cardType}
        />
      </S.Header>

      <S.Footer>
        <S.Amount cardType={cardType}>
          {amount}
        </S.Amount>
        <S.LastTransaction cardType={cardType}>
          {lastTransaction}</S.LastTransaction>
      </S.Footer>
    </S.Container>
  );
}


