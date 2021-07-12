import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

interface ButtonProps extends RectButtonProps {
  title: string
  onPress: () => void
}

export function Button({ title, onPress, ...props }: ButtonProps) {
  return (
    <S.Container onPress={onPress} {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
