import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export type TransactionTypeButtonProps = {
  title: string
  buttonType: 'up' | 'down'
  isActive: boolean
} & TouchableOpacityProps

export const TransactionTypeButton = ({
  title,
  buttonType,
  isActive,
  ...props
}: TransactionTypeButtonProps) => {
  return (
    <S.Container {...props} isActive={isActive} buttonType={buttonType}>
      <S.Icon name={icons[buttonType]} buttonType={buttonType} />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
