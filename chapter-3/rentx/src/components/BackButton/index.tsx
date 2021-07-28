import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { BorderlessButtonProps } from 'react-native-gesture-handler'

import * as S from './styles'

type BackButtonProps = {
  color?: string
} & BorderlessButtonProps

export const BackButton = ({ color, ...props }: BackButtonProps) => {
  const theme = useTheme()

  return (
    <S.Container {...props}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </S.Container>
  )
}
