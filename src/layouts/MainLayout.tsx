import {type FC, type ReactNode} from 'react';
import {LayoutBox} from "./styledComponents.ts";

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <LayoutBox>
            {children}
        </LayoutBox>
    );
};
