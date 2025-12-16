import {HeadBox, HeaderButton, HeaderTitle, MonitorBox} from "./styledComponents.ts";

function Header() {
    return (
        <HeadBox>
            <HeaderTitle>Map Viewer</HeaderTitle>
            <MonitorBox>256</MonitorBox>
            <MonitorBox>19</MonitorBox>
            <HeaderButton>Connect</HeaderButton>
        </HeadBox>
    );
}

export default Header;