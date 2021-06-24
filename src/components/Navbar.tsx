import { useEffect, useState } from 'react';
import { useThemeContext } from '../context/themeContext';
import Greeting from './Greeting';

const Navbar = (): JSX.Element => {
  const { darkTheme, setDarkTheme, displayLanguage } = useThemeContext();
  const [manualTheme, setManualTheme] = useState(false);
  const hour = new Date().getHours();

  useEffect(() => {
    if (!manualTheme) {
      if (hour > 7 && hour < 18) setDarkTheme(false);
      else setDarkTheme(true);
    }
  }, [hour, manualTheme]);

  return (
    <nav>
      <Greeting />
      <div className="controls">
        <p>
          {displayLanguage.themeButton} {displayLanguage.themeButtonAutoOption}{' '}
          <input
            type="checkbox"
            checked={manualTheme}
            onChange={() => setManualTheme(!manualTheme)}
          />
          {displayLanguage.themeButtonMaunalOption}
        </p>
        {manualTheme && (
          <div>
            <button
              className={darkTheme ? 'primary-btn dark-btn' : 'primary-btn'}
              onClick={() => setDarkTheme(true)}>
              {displayLanguage.darkButton}
            </button>
            <button
              className={darkTheme ? 'primary-btn dark-btn' : 'primary-btn'}
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
