import React, { FC, useContext, useState } from 'react';
import { LanguageType } from '../languages/Types';
import { english } from '../languages/english';

type ContextType = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  displayLanguage: LanguageType;
  setDisplayLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
};

const defaultValue: ContextType = {
  darkTheme: false,
  setDarkTheme: () => {},
  displayLanguage: english,
  setDisplayLanguage: () => {},
};

const ThemeContext = React.createContext(defaultValue);

export const ThemeProvider: FC = ({ children }) => {
  const [displayLanguage, setDisplayLanguage] = useState(english);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        displayLanguage,
        setDisplayLanguage,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
