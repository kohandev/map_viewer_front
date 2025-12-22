import { Box, Button, styled, Typography } from '@mui/material';

import MapMarkerIcon from 'src/icons/svg/MapMarker.svg?react';

export const HeadBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 60,
  width: '100%',
  minWidth: 800,
  padding: theme.spacing(1, 2),
  borderBottom: '1px solid #e0e0e0',
  backgroundColor: '#4a6362',
}));

export const HeaderTitleBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: 180,
  height: 40,
});

export const HeaderLogoBox = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: 4,
  backgroundColor: '#baefeb',
});

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: '#202b2a',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontSize: 20,
  paddingLeft: theme.spacing(2),
}));

interface IStatusIndicatorProps {
  notActive: boolean;
  status: boolean;
}

export const ActionBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 260,
});

export const StatusIndicator = styled(MapMarkerIcon, {shouldForwardProp: (prop) => prop !== 'notActive' && prop !== 'status',})<IStatusIndicatorProps>(({ notActive, status }) => {
  const color = () => {
    if (notActive) return '#202b2a';
    return status ? '#baefeb' : '#e04040';
  };
  return {
    height: 40,
    width: 40,
    color: color(),
    display: 'flex',
  };
});

export const HeaderButton = styled(Button)(({ theme }) => ({
  width: 200,
  height: 40,
  backgroundColor: '#40798a',
  color: '#baefeb',
  marginLeft: theme.spacing(3),

  '&:hover': { backgroundColor: '#5c8b98' },
}));

export const MonitorBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 44,
  width: 152,
  borderRadius: 4,
  backgroundColor: '#baefeb',
});
