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
  const { getGeoDataAction, geoData } = geoStore;

  console.log('accessToken', accessToken);
  const handleButton = async () => {
    if (isActiveStatus) {
      await stopEngine();
      setActiveStatus(false);
      return;
    }
    await getTokenAction();
    await startEngine();
    getGeoDataAction();
    setActiveStatus(true);
  };

  console.log(geoData?.value);

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
      {/*{accessToken && <MonitorBox>{accessToken}</MonitorBox>}*/}
      <ActionBox>
        <StatusIndicator notActive={!accessToken} status={isActiveStatus} />
        <HeaderButton onClick={() => handleButton()}>{buttonText}</HeaderButton>
      </ActionBox>
    </HeadBox>
  );
});
