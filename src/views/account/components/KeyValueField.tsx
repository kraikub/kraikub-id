import { Grid, Typography, useTheme } from "@mui/material";
import { FC } from "react";

interface KeyVauleFieldProps {
  title: string;
  value?: any;
}

export const KeyVauleField: FC<KeyVauleFieldProps> = ({ title, value }) => {
  const theme = useTheme();
  return (
    <Grid
      container
      my={3}
      sx={{
        color: theme.palette.text.primary,
      }}
    >
      <Grid item xs={4} sm={3} md={2}>
        <Typography variant="body2" fontWeight={500}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={8} sm={9} md={10}>
        <Typography variant="body2" color="inherit">
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};