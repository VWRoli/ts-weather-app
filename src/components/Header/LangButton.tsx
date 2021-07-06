import { useSettingsContext } from '../../context/settingsContext';

type Props = {
  text: string;
  lang: string;
  isActive: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const LangButton: React.FC<Props> = ({
  text,
  lang,
  isActive,
  handleClick,
}): JSX.Element => {
  const { darkTheme } = useSettingsContext();

  return (
    <button
      className={darkTheme ? 'link-btn dark-btn' : 'link-btn'}
      onClick={handleClick}
      data-lang={lang}
      style={{ color: isActive ? '#237dd1' : '' }}>
      {text}
    </button>
  );
};

export default LangButton;
