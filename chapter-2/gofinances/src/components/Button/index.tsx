import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type ButtonProps = {
  title: string
} & TouchableOpacityProps

export const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <S.Container {...props}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
