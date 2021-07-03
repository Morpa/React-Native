import React, { useState, useEffect } from 'react'
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Platform,
  FlatList
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export const Home = () => {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGreeting] = useState('')

  const handleAddNewSkill = () => {
    setMySkills((oldState) => [...oldState, newSkill])
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreeting('Good morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afertnoon')
    } else {
      setGreeting('Good night')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Morpa</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120115',
    paddingVertical: 70,
    paddingHorizontal: 30
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 30,
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7
  },
  greetings: {
    color: '#FFF'
  }
})
