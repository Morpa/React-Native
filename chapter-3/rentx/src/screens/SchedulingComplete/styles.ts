import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.header};
    padding-top: 96px;
  `}
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.shape};
    font-family: ${theme.fonts.secondary600};
    margin-top: 40px;
  `}
`
export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.textDetail};
    font-family: ${theme.fonts.primary400};
    margin-top: 16px;
    text-align: center;
    line-height: ${RFValue(25)}px;
  `}
`
export const Footer = styled.View`
  width: 100%;
  align-items: center;
  margin: 80px 0;
`
