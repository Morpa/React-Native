import React from 'react'
import { SvgProps } from 'react-native-svg'

import * as S from './styles'

type AccessoryProps = {
  name: string
  icon: React.FC<SvgProps>
}

export const Accessory = ({ name, icon: Icon }: AccessoryProps) => (
  <S.Container>
    <Icon width={32} height={32} />
    <S.Name>{name}</S.Name>
  </S.Container>
)
