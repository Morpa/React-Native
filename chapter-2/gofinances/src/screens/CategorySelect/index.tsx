import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

import { Button } from '../../components/Button'
import { categories } from '../../utils/categories'

import * as S from './styles'

type Category = {
  key: string
  name: string
}

type CategorySelectProps = {
  category: Category
  setCategory: (category: Category) => void
  closedSelectCategory: () => void
}

export const CategorySelect = ({
  category,
  setCategory,
  closedSelectCategory
}: CategorySelectProps) => {
  const CategorySelelect = (category: Category) => {
    setCategory(category)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Categoria</S.Title>
      </S.Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <S.Category
            onPress={() => CategorySelelect(item)}
            isActive={category.key === item.key}
          >
            <S.Icon name={item.icon} />
            <S.Name>{item.name}</S.Name>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />

      <S.Footer>
        <Button title="Selecionar" onPress={closedSelectCategory} />
      </S.Footer>
    </S.Container>
  )
}
