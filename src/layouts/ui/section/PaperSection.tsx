import { Paper } from "@mui/material";
import { FC } from "react";
import { MuiPaperSx } from "../../../styles/mui/custom-mui-sx";

interface PaperSectionProps {
  children?: any;
  sx?: any;
}

export const PaperSection: FC<PaperSectionProps> = (props) => {
  return (
    <Paper sx={{
      ...MuiPaperSx.disableBorderRadiusOnMobile,
      ...MuiPaperSx.disableBorderXOnMobile,
      ...props.sx
    }}>
      {props.children}
    </Paper>
  )
}