import styled, { css, DefaultTheme } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import { TransactionTypeButtonProps } from '.'

const containerModifiers = {
  up: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.successLight};
    border: 0 solid ${theme.colors.text};
  `,

  down: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.attentionLight};
    border: 0 solid ${theme.colors.text};
  `
}

export const Container = styled.View<
  Pick<TransactionTypeButtonProps, 'isActive' | 'buttonType'>
>`
  ${({ theme, isActive, buttonType }) => css`
    width: 48%;
    border: 1.5px solid ${theme.colors.text};
    border-radius: 5px;

    ${isActive && buttonType === 'up' && containerModifiers.up(theme)};
    ${isActive && buttonType === 'down' && containerModifiers.down(theme)};
  `}
`

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

const iconModifiers = {
  up: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,

  down: (theme: DefaultTheme) => css`
    color: ${theme.colors.attention};
  `
}

export const Icon = styled(Feather)<
  Pick<TransactionTypeButtonProps, 'buttonType'>
>`
  ${({ theme, buttonType }) => css`
    font-size: ${RFValue(24)}px;
    ${iconModifiers[buttonType](theme)};
    margin-right: 12px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
  `}
`
