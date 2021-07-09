import styled, { css, DefaultTheme } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

import { HighlightCardProps } from '.'

const iconModifiers = {
  up: (theme: DefaultTheme) => css`
    color: ${theme.colors.success};
  `,

  down: (theme: DefaultTheme) => css`
    color: ${theme.colors.attention};
  `,

  total: (theme: DefaultTheme) => css`
    color: ${theme.colors.shape};
  `
}

const containerModifiers = {
  movements: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.shape};
  `,

  total: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
  `
}

const textModifiers = {
  movements: (theme: DefaultTheme) => css`
    color: ${theme.colors.textDark};
  `,

  total: (theme: DefaultTheme) => css`
    color: ${theme.colors.shape};
  `
}

export const Container = styled.View<Pick<HighlightCardProps, 'cardType'>>`
  ${({ theme, cardType }) => css`
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
    ${containerModifiers[cardType](theme)};
  `}
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const Title = styled.Text<Pick<HighlightCardProps, 'cardType'>>`
  ${({ theme, cardType }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    ${textModifiers[cardType](theme)};
  `}
`
export const Icon = styled(Feather)<Pick<HighlightCardProps, 'iconType'>>`
  ${({ theme, iconType }) => css`
    font-size: ${RFValue(40)}px;
    ${iconModifiers[iconType](theme)};
  `}
`

export const Footer = styled.View``

export const Amount = styled.Text<Pick<HighlightCardProps, 'cardType'>>`
  ${({ theme, cardType }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
    ${textModifiers[cardType](theme)};
  `}
`
export const LastTransaction = styled.Text<
  Pick<HighlightCardProps, 'cardType'>
>`
  ${({ theme, cardType }) => css`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.regular};
    ${textModifiers[cardType](theme)};
  `}
`
