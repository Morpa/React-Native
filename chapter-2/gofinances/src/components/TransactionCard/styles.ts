import styled, { css, DefaultTheme } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import { TransactionDataProps } from '.'

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
  `}
`

const amountModifiers = {
  positive: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,

  negative: (theme: DefaultTheme) => css`
    color: ${theme.colors.attention};
  `
}

export const Amount = styled.Text<Pick<TransactionDataProps, 'amountType'>>`
  ${({ theme, amountType }) => css`
    font-size: ${RFValue(20)}px;
    font-family: ${theme.fonts.regular};
    margin-top: 2px;
    ${amountModifiers[amountType](theme)};
  `}
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CategoryName = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regular};
    margin-left: 17px;
  `}
`

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.regular};
    color: ${theme.colors.text};
  `}
`

export const Icon = styled(Feather)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(20)}px;
  `}
`
