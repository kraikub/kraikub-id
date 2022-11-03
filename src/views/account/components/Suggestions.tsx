import {
  Box,
  Button,
  Card,
  Collapse,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import { FC, useEffect, useState } from "react";
import { CardBase } from "./CardBase";
import { NoVerifiedEmail } from "./NoVerifiedEmail";
import { SecodaryEmail } from "./SecodaryEmail";
import { TwoFactor } from "./TwoFactor";

export const Suggestions: FC = () => {
  const [hide, setHide] = useState(true);
  const theme = useTheme();

  const toggleHide = () => {
    setHide(!hide);
  };

  return (
    <Box
      sx={{
        my: "20px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: "20px",
        }}
      >
        <Typography variant="body2">แนะนำ</Typography>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{
            borderRadius: "1000px",
            fontSize: 12,
          }}
          disableRipple
          onClick={toggleHide}
        >
          {hide ? "แสดง" : "ซ่อน"}
        </Button>
      </Stack>
      <Collapse in={!hide}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={3}>
            <NoVerifiedEmail />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TwoFactor />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <SecodaryEmail />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CardBase />
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};
