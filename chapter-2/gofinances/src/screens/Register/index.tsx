import React, { useState } from 'react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TransactionTypeButton } from '../../components/TransactionTypeButton'

import * as S from './styles'

export const Register = () => {
  const [transactionType, setTransactionType] = useState('')

  const handleTransactionTypeSelect = (transactionType: 'up' | 'down') => {
    setTransactionType(transactionType)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro</S.Title>
      </S.Header>

      <S.Form>
        <S.Fields>
          <Input placeholder="Nome" />

          <Input placeholder="Preço" />

          <S.TransactionTypes>
            <TransactionTypeButton
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
              buttonType="up"
              title="Income"
            />

            <TransactionTypeButton
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
              buttonType="down"
              title="Outcome"
            />
          </S.TransactionTypes>
        </S.Fields>

        <Button title="Enviar" />
      </S.Form>
    </S.Container>
  )
}
