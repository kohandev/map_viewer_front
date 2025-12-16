import {Box} from "@mui/material";
import Header from "./components/Header/Header.tsx";
import {MapScreen} from "./components/MapScreen/MapScreen.tsx";

export const MainPage = () => {
    return (
        <Box sx={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
        }}>
            <Header/>
            <MapScreen/>
        </Box>
    );
};
