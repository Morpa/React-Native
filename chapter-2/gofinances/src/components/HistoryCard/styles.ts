import styled, { css } from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

type ContainerProps = {
  color: string
}

export const Container = styled.View<ContainerProps>`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.shape};
    flex-direction: row;
    justify-content: space-between;
    padding: 13px 24px;
    border-radius: 5px;
    border-left-width: 5px;
    margin-bottom: 8px;
  `}
  border-left-color: ${({ color }) => color};
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(15)}px;
  `}
`
export const Amount = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(15)}px;
  `}
`
