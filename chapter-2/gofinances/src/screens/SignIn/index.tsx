import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { SocialButton } from '../../components/SocialButton'
import { useAuth } from '../../hooks/use-auth'

import AppleSVG from '../../assets/apple.svg'
import GoogleSVG from '../../assets/google.svg'
import LogoSVG from '../../assets/logo.svg'

import * as S from './styles'

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { signInWithGoogle, signInWithApple } = useAuth()
  const theme = useTheme()

  const handleSignInWithGoogle = () => {
    try {
      setIsLoading(true)
      return signInWithGoogle()
    } catch (error) {
      console.error(error)
      Alert.alert('Não foi possível conectar com o Google')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignInWithApple = () => {
    try {
      setIsLoading(true)
      return signInWithApple()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Apple')
    } finally {
      setIsLoading(false)
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

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 18 }}
          />
        )}
      </S.Footer>
    </S.Container>
  )
}
