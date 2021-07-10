import React from 'react'

import * as S from './styles'

type CategorySelectProps = {
  title: string
}

export const CategorySelect = ({ title }: CategorySelectProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Icon name="chevron-down" />
    </S.Container>
  )
}
