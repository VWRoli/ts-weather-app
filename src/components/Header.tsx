import { useState } from 'react';
import { useSettingsContext } from '../context/settingsContext';
import { english } from '../languages/english';
import { hungarian } from '../languages/hungarian';

const Header = (): JSX.Element => {
  const { darkTheme, setDisplayLanguage, displayLanguage } =
    useSettingsContext();

  const [isActive, setIsActive] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clicked = e.currentTarget.dataset.lang;
    if (clicked === 'eng') {
      setDisplayLanguage(english);
      setIsActive(true);
    } else {
      setDisplayLanguage(hungarian);
      setIsActive(false);
    }
  };

  return (
    <header>
      <h1>{displayLanguage.headerTitle}</h1>
      <div className="select-lang">
        <button
          className={darkTheme ? 'link-btn dark-btn' : 'link-btn'}
          onClick={handleClick}
          data-lang="eng"
          style={{ color: isActive ? '#237dd1' : '' }}>
          {displayLanguage.engButton}
        </button>
        <button
          className={darkTheme ? 'link-btn dark-btn' : 'link-btn'}
          onClick={handleClick}
          style={{ color: !isActive ? '#237dd1' : '' }}>
          {displayLanguage.hunButton}
        </button>
      </div>
    </header>
  );
};

export default Header;
