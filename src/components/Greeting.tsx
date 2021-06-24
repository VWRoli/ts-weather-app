import { useThemeContext } from '../context/themeContext';

const Greeting = (): JSX.Element => {
  const { displayLanguage } = useThemeContext();
  const hour = new Date().getHours();

  if (hour > 7 && hour < 12)
    return <h2>{displayLanguage.morningWelcomeMessage}</h2>;
  if (hour > 12 && hour < 18)
    return <h2>{displayLanguage.afternoonWelcomeMessage}</h2>;

  return <h2>{displayLanguage.eveningWelcomeMessage}</h2>;
};

export default Greeting;
