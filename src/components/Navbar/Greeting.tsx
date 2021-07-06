import { useSettingsContext } from '../../context/settingsContext';
import checkDayHours from '../../helpers/checkDayHours';

const Greeting = (): JSX.Element => {
  const { displayLanguage } = useSettingsContext();

  if (checkDayHours(7, 12))
    return <h2>{displayLanguage.morningWelcomeMessage}</h2>;
  if (checkDayHours(13, 18))
    return <h2>{displayLanguage.afternoonWelcomeMessage}</h2>;

  return <h2>{displayLanguage.eveningWelcomeMessage}</h2>;
};

export default Greeting;
