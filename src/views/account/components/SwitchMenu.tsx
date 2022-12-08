import { Grid } from "@mui/material";
import { ReactNode, FC } from "react";
import { IOSSwitch } from "../../../layouts/ui/input/IosSwitch";

interface SwitchMenuProps {
  children?: ReactNode;
}


export const SwitchMenu: FC<SwitchMenuProps> = (props) => {
  return (
    <Grid container>
      <Grid item xs={9}>
        {props.children}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <IOSSwitch />
      </Grid>
    </Grid>
  );
};