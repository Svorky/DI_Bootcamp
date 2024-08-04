import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Article from './components/Article.jsx';
import './App.css'

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className=''>
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        <Article />
      </div>
    </ThemeProvider>
  );
}

export default App;