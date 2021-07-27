import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 126px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    margin-bottom: 16px;
    background-color: ${theme.colors.backgroundSecondary};
  `}
`

export const Details = styled.View``

export const Brand = styled.Text`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-family: ${theme.fonts.secondary500};
    color: ${theme.colors.textDetail};
    font-size: ${RFValue(10)}px;
  `}
`

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary500};
    color: ${theme.colors.title};
    font-size: ${RFValue(15)}px;
  `}
`

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`

export const Rent = styled.View`
  margin-right: 24px;
`

export const Period = styled.Text`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-family: ${theme.fonts.secondary500};
    color: ${theme.colors.textDetail};
    font-size: ${RFValue(10)}px;
  `}
`

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary500};
    color: ${theme.colors.main};
    font-size: ${RFValue(15)}px;
  `}
`

export const Type = styled.View``

export const CardImage = styled.Image`
  width: 167px;
  height: 85px;
`
