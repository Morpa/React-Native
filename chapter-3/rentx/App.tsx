import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import { SchedulingDetails } from './src/screens/SchedulingDetails'
import theme from './src/styles/theme'

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SchedulingDetails />
    </ThemeProvider>
  )
}

export default App
