import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input } from '../Input'

import * as S from './styles'

type InputFormProps = {
  control: Control
  name: string
  error: string
} & TextInputProps

export const InputForm = ({
  control,
  name,
  error,
  ...props
}: InputFormProps) => {
  return (
    <S.Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...props} />
        )}
        name={name}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  )
}
