import { useEffect, useState } from 'react';
import { useSettingsContext } from '../context/settingsContext';
import Greeting from './Greeting';

const Navbar = (): JSX.Element => {
  const { darkTheme, setDarkTheme, displayLanguage } = useSettingsContext();
  const [autoTheme, setAutoTheme] = useState(true);
  const hour = new Date().getHours();

  useEffect(() => {
    if (autoTheme) {
      if (hour > 7 && hour < 18) setDarkTheme(false);
      else setDarkTheme(true);
    }
  }, [hour, autoTheme]);

  return (
    <nav>
      <Greeting />
      <div className="controls">
        <div>
          {displayLanguage.themeButton}{' '}
          {displayLanguage.themeButtonMaunalOption}{' '}
          <input
            type="checkbox"
            checked={autoTheme}
            onChange={() => setAutoTheme(!autoTheme)}
          />
          {displayLanguage.themeButtonAutoOption}
        </div>
        {autoTheme || (
          <div>
            <button
              className={
                darkTheme ? 'primary-btn dark-btn active-btn' : 'primary-btn'
              }
              onClick={() => setDarkTheme(true)}>
              {displayLanguage.darkButton}
            </button>
            <button
              className={
                darkTheme ? 'primary-btn dark-btn' : 'primary-btn active-btn'
              }
              onClick={() => setDarkTheme(false)}>
              {displayLanguage.lightButton}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
