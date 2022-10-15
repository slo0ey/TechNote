import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home';
import theme from './components/theme';
import { ThemeProvider } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getSeason } from './utils/common';
import * as Ctx from 'context';

function App() {
  console.log('Rendering App');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (!theme) {
      setIsDarkMode(false);
    } else if (theme === 'light') {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(`isDark: ${!isDarkMode}`);
    window.localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme}>
      <Ctx.AppTheme.Provider
        value={{ season: getSeason(), isDarkMode, toggleDarkMode }}
      >
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Ctx.AppTheme.Provider>
    </ThemeProvider>
  );
}

export default App;
