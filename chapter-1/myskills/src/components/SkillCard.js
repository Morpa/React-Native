import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export const SkillCard = ({ skill }) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    padding: 15,
    backgroundColor: '#1F1e25',
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10
  },
  textSkill: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold'
  }
})
