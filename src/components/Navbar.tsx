import { useThemeContext } from '../context/themeContext';
import Greeting from './Greeting';

const Navbar = (): JSX.Element => {
  const { darkTheme, setDarkTheme, displayLanguage } = useThemeContext();

  return (
    <nav>
      <Greeting />
      <div className="controls">
        <div>
          <p>
            {displayLanguage.themeButton}{' '}
            {displayLanguage.themeButtonAutoOption} <input type="checkbox" />{' '}
            {displayLanguage.themeButtonMaunalOption}
          </p>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
