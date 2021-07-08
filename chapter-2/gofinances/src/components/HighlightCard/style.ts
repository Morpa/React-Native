import styled, { css, DefaultTheme } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import { HighlightCardProps } from '.'

type CardOptions = Pick<HighlightCardProps, 'cardType'> 

const iconModifiers = {
  up: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,

  down: (theme: DefaultTheme) => css`
   color: ${theme.colors.attention};
  `,

  total: (theme: DefaultTheme) => css`
    color: ${theme.colors.shape};
  `,
}

export const Container = styled.View<CardOptions>`
  ${({ theme, cardType }) => css`
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
    background-color: ${cardType === 'total' ? theme.colors.secondary : theme.colors.shape};
  `}
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Title = styled.Text<CardOptions>`
  ${({ theme, cardType }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color:${cardType === 'total' ? theme.colors.shape : theme.colors.textDark};
  `}
`
export const Icon = styled(Feather)<CardOptions>`
  ${({ theme, cardType }) => css`
   font-size: ${RFValue(40)}px;
   ${iconModifiers[cardType](theme)};
  `}
`
export const Footer = styled.View``

export const Amount = styled.Text<CardOptions>`
  ${({ theme, cardType }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
    color:${cardType === 'total' ? theme.colors.shape : theme.colors.textDark};
  `}
`
export const LastTransaction = styled.Text<CardOptions>`
  ${({ theme, cardType }) => css`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.regular};
    color:${cardType === 'total' ? theme.colors.shape : theme.colors.text};
  `}
`