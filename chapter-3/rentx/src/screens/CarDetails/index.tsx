import React from 'react'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'

import * as S from './styles'

export const CarDetails = () => {
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => { }} />
      </S.Header>

      <S.CarImages>
        <ImageSlider
          imageUrl={[
            'https://www.real-luxury.com/media/tz_portfolio_plus/article/cache/noleggio-audi-r8-spyder-35-1_xl.png'
          ]}
        />
      </S.CarImages>
    </S.Container>
  )
}
