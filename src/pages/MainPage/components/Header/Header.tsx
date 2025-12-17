import {
  HeadBox,
  HeaderButton,
  HeaderLogoBox,
  HeaderTitle,
  HeaderTitleBox,
  MonitorBox,
} from "./styledComponents.ts";
import MapsIcon from "src/icons/svg/Maps.svg?react";
import MapMarkerIcon from "src/icons/svg/MapMarker.svg?react";

function Header() {
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
      <HeaderButton startIcon={<MapMarkerIcon height={28} width={28} />}>
        Connect
      </HeaderButton>
    </HeadBox>
  );
}

export default Header;
