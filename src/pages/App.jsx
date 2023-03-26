import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Shiny from "./Shiny"
import { createContext, useState } from "react"
import ThemeMode from "../components/ThemeMode"

export const ThemeContext = createContext("light")

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/shiny/:questionNumber",
    element: <Shiny />,
  }
])

function App() {
  const [themeMode, setThemeMode] = useState('light')
  return (
    <ThemeContext.Provider value={{themeMode, setThemeMode}}>
      <ThemeMode />
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  )
}

export default App