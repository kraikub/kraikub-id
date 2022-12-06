import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { MobileSaveSection } from "../section/MobileSaveSection";

interface PageHeadingProps {
  children?: any;
  disableMargin?: boolean;
}

export const PageHeading: FC<PageHeadingProps> = (props) => {
  return (
    <Box
      sx={{
        mb: props.disableMargin ? 0 : "10px",
      }}
    >
      <Typography variant="h5" className="letter-spacing-1">
        {props.children}
      </Typography>
    </Box>
  );
};
