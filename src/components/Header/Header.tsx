import { useState } from 'react';
import { useSettingsContext } from '../../context/settingsContext';
import { english } from '../../languages/english';
import { hungarian } from '../../languages/hungarian';
//Components
import LangButton from './LangButton';

const Header = (): JSX.Element => {
  const { displayLanguage, setDisplayLanguage } = useSettingsContext();
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
        <LangButton
          text={displayLanguage.engButton}
          lang="eng"
          isActive={isActive}
          handleClick={handleClick}
        />
        <LangButton
          text={displayLanguage.hunButton}
          lang="hun"
          isActive={!isActive}
          handleClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
