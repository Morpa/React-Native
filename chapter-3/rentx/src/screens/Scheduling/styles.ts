import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundSecondary};
  `}
`
export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 325px;
    background-color: ${theme.colors.header};
    justify-content: space-between;
    padding: 25px;
    padding-top: ${getStatusBarHeight() + 30}px;
  `}
`
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.secondary600};
    font-size: ${RFValue(34)}px;
    margin-top: 24px;
  `}
`

export const RentailPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`
export const DateInfo = styled.View`
  width: 30%;
`
export const DateTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.secondary500};
    font-size: ${RFValue(10)}px;
  `}
`

type DateValueProps = {
  selected: boolean
}

export const DateValue = styled.Text<DateValueProps>`
  ${({ theme, selected }) => css`
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(15)}px;

    ${!selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `}
  `}
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showsVerticalScrollIndicator: false
})``

export const Footer = styled.View`
  padding: 24px;
`
