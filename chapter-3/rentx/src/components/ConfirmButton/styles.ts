import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

type ButtonProps = {
  color?: string
} & RectButtonProps

export const Container = styled(RectButton)<ButtonProps>`
  ${({ theme }) => css`
    width: 80px;
    height: 56px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.shapeDark};
  `}
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.shape};
  `}
`
