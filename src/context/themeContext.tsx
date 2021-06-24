import React, { FC, useContext, useState } from 'react';
import { LanguageType } from '../languages/Types';
import { english } from '../languages/english';

type ContextType = {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  isManualThemeChange: boolean;
  setIsManualThemeChange: React.Dispatch<React.SetStateAction<boolean>>;
  displayLanguage: LanguageType;
  setDisplayLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
};

const defaultValue: ContextType = {
  darkTheme: false,
  setDarkTheme: () => {},
  isManualThemeChange: false,
  setIsManualThemeChange: () => {},
  displayLanguage: english,
  setDisplayLanguage: () => {},
};

const ThemeContext = React.createContext(defaultValue);

export const ThemeProvider: FC = ({ children }) => {
  const [displayLanguage, setDisplayLanguage] = useState(english);
  const [isManualThemeChange, setIsManualThemeChange] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        isManualThemeChange,
        setIsManualThemeChange,
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
