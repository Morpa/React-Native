import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

type ConfirmButtonProps = {
  title: string
} & RectButtonProps

export const ConfirmButton = ({ title, ...props }: ConfirmButtonProps) => (
  <S.Container {...props}>
    <S.Title>{title}</S.Title>
  </S.Container>
)
