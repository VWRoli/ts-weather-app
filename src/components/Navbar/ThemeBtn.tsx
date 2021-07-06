import { useSettingsContext } from '../../context/settingsContext';

type Props = {
  text: string;
  isDark: boolean;
  isActive?: boolean;
};

const ThemeBtn: React.FC<Props> = ({ text, isDark, isActive }): JSX.Element => {
  const { darkTheme, setDarkTheme } = useSettingsContext();
  return (
    <button
      className={darkTheme ? 'primary-btn dark-btn' : 'primary-btn'}
      style={{ backdropFilter: isActive ? 'invert(15%)' : '' }}
      onClick={() => setDarkTheme(isDark)}>
      {text}
    </button>
  );
};

export default ThemeBtn;
