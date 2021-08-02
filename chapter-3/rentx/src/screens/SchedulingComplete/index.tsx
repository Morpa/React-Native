import React from 'react'
import { useWindowDimensions } from 'react-native'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import { ConfirmButton } from '../../components/ConfirmButton'

import * as S from './styles'

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions()

  return (
    <S.Container>
      <LogoSvg width={width} />
      <S.Content>
        <DoneSvg width={80} height={80} />
        <S.Title>Carro alugado!</S.Title>
        <S.Message>
          Agora você só precisar ir {'\n'}
          até a loja da RentX {'\n'}
          retirar o seu veículo
        </S.Message>
      </S.Content>
      <S.Footer>
        <ConfirmButton title="OK" />
      </S.Footer>
    </S.Container>
  )
}
