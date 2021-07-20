import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

type SocialButtonProps = {
  title: string
  svg: React.FC<SvgProps>
} & RectButtonProps

export const SocialButton = ({
  title,
  svg: Svg,
  ...props
}: SocialButtonProps) => (
  <S.Button {...props}>
    <S.ImageContainer>
      <Svg />
    </S.ImageContainer>
    <S.Title>{title}</S.Title>
  </S.Button>
)
