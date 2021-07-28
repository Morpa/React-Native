import styled, { css } from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundSecondary};
  `}
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`
export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`
