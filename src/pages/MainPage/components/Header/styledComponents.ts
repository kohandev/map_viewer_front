import { Box, Button, styled, Typography } from "@mui/material";

export const HeadBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 60,
  width: "100%",
  padding: theme.spacing(1, 2),
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: "#4a6362",
}));

export const HeaderTitleBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: 260,
  height: 40,
});

export const HeaderLogoBox = styled(Box)({
  width: 40,
  height: 40,
  borderRadius: 4,
  backgroundColor: "#baefeb",
});

export const HeaderTitle = styled(Typography)(({ theme }) => ({
  color: "#baefeb",
  textTransform: "uppercase",
  fontWeight: 700,
  fontSize: 20,
  paddingLeft: theme.spacing(1),
}));

export const HeaderButton = styled(Button)(({ theme }) => ({
  width: 200,
  height: 40,
  backgroundColor: "#2e5865",
  color: "#baefeb",
  marginLeft: theme.spacing(3),

  "&:hover": {
    backgroundColor: "#40798a",
  },
}));

export const MonitorBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 44,
  width: 86,
  borderRadius: 4,
  backgroundColor: "#81a8a5",
});
