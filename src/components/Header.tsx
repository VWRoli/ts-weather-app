import { useThemeContext } from '../context/themeContext';
import { english } from '../languages/english';
import { hungarian } from '../languages/hungarian';

const Header = () => {
  const { darkTheme, setDisplayLanguage, displayLanguage } = useThemeContext();

  return (
    <header>
      <h1>{displayLanguage.headerTitle}</h1>
      <div className="select-lang">
        <button
          className={darkTheme ? 'link-btn dark-btn' : 'link-btn'}
          onClick={() => setDisplayLanguage(english)}>
          {displayLanguage.engButton}
        </button>
        <button
          className={darkTheme ? 'link-btn dark-btn' : 'link-btn'}
          onClick={() => setDisplayLanguage(hungarian)}>
          {displayLanguage.hunButton}
        </button>
      </div>
    </header>
  );
};

export default Header;
