import React from 'react'
import { Alert } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { SocialButton } from '../../components/SocialButton'
import { useAuth } from '../../hooks/use-auth'

import AppleSVG from '../../assets/apple.svg'
import GoogleSVG from '../../assets/google.svg'
import LogoSVG from '../../assets/logo.svg'

import * as S from './styles'

export const SignIn = () => {
  const { signInWithGoogle, signInWithApple } = useAuth()

  const handleSignInWithGoogle = () => {
    try {
      signInWithGoogle()
    } catch (error) {
      console.error(error)
      Alert.alert('Não foi possível conectar com o Google')
    }
  }

  const handleSignInWithApple = () => {
    try {
      signInWithApple()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Apple')
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.TitleWrapper>
          <LogoSVG width={RFValue(120)} height={RFValue(68)} />
          <S.Title>
            Controle suas {'\n'} finanças de forma {'\n'} mais simples
          </S.Title>
        </S.TitleWrapper>

        <S.SignInTitle>
          Faça o seu login {'\n'} com uma das contas abaixo
        </S.SignInTitle>
      </S.Header>

      <S.Footer>
        <S.FooterWrapper>
          <SocialButton
            title="Entrar com Google"
            svg={GoogleSVG}
            onPress={handleSignInWithGoogle}
          />
          <SocialButton
            title="Entrar com Apple"
            svg={AppleSVG}
            onPress={handleSignInWithApple}
          />
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  )
}
