import React from 'react'
import { RootRoute } from 'routes'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import darkTheme from 'styles/darkTheme'
import lightTheme from 'styles/lightTheme'
import { useSelector } from 'react-redux'
import { getTheme } from 'store/modules/theme/selectors'
import { GlobalStyles } from 'styles/global'

export function App() {
  const themes: { [key: string]: DefaultTheme } = {
    light: lightTheme,
    dark: darkTheme,
  }

  const theme = useSelector(getTheme)

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <RootRoute />
    </ThemeProvider>
  )
}
