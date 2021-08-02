import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

type ButtonProps = {
  title: string
  color?: string
} & RectButtonProps

export const Button = ({ title, color, ...props }: ButtonProps) => (
  <S.Container {...props} color={color}>
    <S.Title>{title}</S.Title>
  </S.Container>
)
