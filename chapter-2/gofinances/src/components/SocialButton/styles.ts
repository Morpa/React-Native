import styled, { css } from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const Button = styled(RectButton)`
  ${({ theme }) => css`
    height: ${RFValue(56)}px;
    align-items: center;
    flex-direction: row;
    border-radius: 5px;
    background-color: ${theme.colors.shape};
    margin-bottom: 16px;
  `}
`

export const ImageContainer = styled.View`
  ${({ theme }) => css`
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: ${RFValue(16)}px;
    border-color: ${theme.colors.background};
    border-right-width: 1px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    text-align: center;
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.medium};
  `}
`
