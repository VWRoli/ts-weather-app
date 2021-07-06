import { useEffect, useState } from 'react';
import { useSettingsContext } from '../../context/settingsContext';
import checkDayHours from '../../helpers/checkDayHours';
//Components
import Greeting from './Greeting';
import ThemeBtn from './ThemeBtn';

const Navbar = (): JSX.Element => {
  const { darkTheme, setDarkTheme, displayLanguage } = useSettingsContext();
  const [autoTheme, setAutoTheme] = useState(true);

  useEffect(() => {
    if (autoTheme) {
      if (checkDayHours(7, 18)) setDarkTheme(false);
      else setDarkTheme(true);
    }
  }, [autoTheme, setDarkTheme]);

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
            <ThemeBtn
              text={displayLanguage.darkButton}
              isDark={true}
              isActive={darkTheme}
            />
            <ThemeBtn
              text={displayLanguage.lightButton}
              isDark={false}
              isActive={!darkTheme}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
