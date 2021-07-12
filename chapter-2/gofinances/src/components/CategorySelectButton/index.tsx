import React from 'react'

import * as S from './styles'

type CategorySelectButtonProps = {
  title: string
  onPress: () => void
}

export const CategorySelectButton = ({
  title,
  onPress
}: CategorySelectButtonProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.Title>{title}</S.Title>
      <S.Icon name="chevron-down" />
    </S.Container>
  )
}
