import { useContext } from "react"
import { ThemeContext } from "../pages/App"
import { createGlobalStyle } from "styled-components"

export const Color = {
  primary: '#5843E4',
  onPrimary: '#6755e2',
  secondary: '#5843E4',
  canvasColor: 'rgba(88,67,228,0.09)',
  backgroundColor: 'white',
  darkBackground: '#2F2E41',
  text: '#2F2E41'
}

const LightTheme = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${Color.backgroundColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const DarkTheme = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${Color.darkBackground};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    color: white;
  }
`

function ThemeMode() {
  const { themeMode } = useContext(ThemeContext)

  return (themeMode === 'dark'? <DarkTheme/> : <LightTheme/>)
}

export default ThemeMode