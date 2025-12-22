import {
  ActionBox,
  HeadBox,
  HeaderButton,
  HeaderLogoBox,
  HeaderTitle,
  HeaderTitleBox,
  MonitorBox,
  StatusIndicator,
} from './styledComponents.ts';
import MapsIcon from 'src/icons/svg/Maps.svg?react';
import { observer } from 'mobx-react-lite';
import controlStore from '../../../../store/control-store.ts';
import geoStore from '../../../../store/geo-store.ts';
import { useMemo, useState } from 'react';

export const Header = observer(() => {
  const [isActiveStatus, setActiveStatus] = useState<boolean>(false);

  const buttonText = useMemo(() => {
    return isActiveStatus ? 'Disconnect' : 'Connect';
  }, [isActiveStatus]);

  const { getTokenAction, accessToken, startEngine, stopEngine } = controlStore;
  const { startPolling, stopPolling } = geoStore;

  const handleButton = async () => {
    if (isActiveStatus) {
      await stopEngine();
      stopPolling();
      setActiveStatus(false);
      return;
    }
    await getTokenAction();
    await startEngine();
    await startPolling();
    setActiveStatus(true);
  };

  return (
    <HeadBox>
      <HeaderTitleBox>
        <HeaderLogoBox>
          <MapsIcon />
        </HeaderLogoBox>
        <HeaderTitle>Map Viewer</HeaderTitle>
      </HeaderTitleBox>

      <MonitorBox>256</MonitorBox>
      <MonitorBox>19</MonitorBox>
      <ActionBox>
        <StatusIndicator notActive={!accessToken} status={isActiveStatus} />
        <HeaderButton onClick={() => handleButton()}>{buttonText}</HeaderButton>
      </ActionBox>
    </HeadBox>
  );
});
