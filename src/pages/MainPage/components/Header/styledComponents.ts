import {Box, Button, styled, Typography} from "@mui/material";

export const HeadBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: '100%',
    padding: theme.spacing(1, 2),
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: '#4a6362',
}));

export const HeaderTitle = styled(Typography)({
    color: '#81a8a5',
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 20,
});

export const HeaderButton = styled(Button)(({ theme }) => ({
    width: 100,
    height: 44,
    backgroundColor: '#2e5865',
    color: '#81a8a5',
    marginLeft: theme.spacing(3),

}));

export const MonitorBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: 86,
    borderRadius: 4,
    backgroundColor: '#81a8a5',
});