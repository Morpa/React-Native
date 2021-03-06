import React from 'react'
import { useWindowDimensions, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import LogoSvg from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg'
import { ConfirmButton } from '../../components/ConfirmButton'

import * as S from './styles'

export const SchedulingComplete = () => {
  const { width } = useWindowDimensions()
  const navigation = useNavigation()

  const handleConfirm = () => {
    navigation.navigate('Home')
  }

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
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
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </S.Footer>
    </S.Container>
  )
}
