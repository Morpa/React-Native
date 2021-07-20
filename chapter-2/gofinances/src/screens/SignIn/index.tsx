import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'

import AppleSVG from '../../assets/apple.svg'
import GoogleSVG from '../../assets/google.svg'
import LogoSVG from '../../assets/logo.svg'
import { SocialButton } from '../../components/SocialButton'

import * as S from './styles'

export const SignIn = () => {
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
          <SocialButton title="Entrar com Google" svg={GoogleSVG} />
          <SocialButton title="Entrar com Apple" svg={AppleSVG} />
        </S.FooterWrapper>
      </S.Footer>
    </S.Container>
  )
}
