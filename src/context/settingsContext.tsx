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

const SettingsContext = React.createContext(defaultValue);

export const SettingsProvider: FC = ({ children }) => {
  const [displayLanguage, setDisplayLanguage] = useState(english);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <SettingsContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        displayLanguage,
        setDisplayLanguage,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
