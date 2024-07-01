import React, { createContext, useContext, useState } from "react"

export type Theme = {
  accent: string
  neutral: string
  muted: string
  bg: string
  text: string
}

const lightTheme = {
  accent: "#0254C0",
  neutral: "#9CA3AF",
  muted: "#6B7280",
  bg: "#F3F4F6",
  text: "#101015",
}

const darkTheme = {
  accent: "#DC3237",
  neutral: "#F3F4F6",
  muted: "#E3E4E6",
  bg: "#001924",
  text: "#F3F4F6",
}

const ThemeContext = createContext({
  theme: darkTheme,
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme((prevTheme: Theme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
