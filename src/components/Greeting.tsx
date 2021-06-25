import { useSettingsContext } from '../context/settingsContext';

const Greeting = (): JSX.Element => {
  const { displayLanguage } = useSettingsContext();
  const hour = new Date().getHours();

  if (hour > 7 && hour < 12)
    return <h2>{displayLanguage.morningWelcomeMessage}</h2>;
  if (hour > 12 && hour < 18)
    return <h2>{displayLanguage.afternoonWelcomeMessage}</h2>;

  return <h2>{displayLanguage.eveningWelcomeMessage}</h2>;
};

export default Greeting;
