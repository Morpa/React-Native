import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'
import { FlatList } from 'react-native'
import { CarStateProps } from '.'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundPrimary};
  `}
`

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 113px;
    background-color: ${theme.colors.header};
    justify-content: flex-end;
    padding: 32px 24px;
  `}
`
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const TotalCars = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.primary400};
    color: ${theme.colors.text};
  `}
`
export const CarList = styled(
  FlatList as new () => FlatList<CarStateProps>
).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showsVerticalScrollIndicator: false
})``
