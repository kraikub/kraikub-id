import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { MobileSaveSection } from "../section/MobileSaveSection";

interface PageHeadingProps {
  children?: any;
}

export const PageHeading: FC<PageHeadingProps> = (props) => {
  return (
    <Box sx={{
      mb: "20px",
    }}>
      <MobileSaveSection>
        <Typography variant="h5" className="letter-spacing-1">
          {props.children}
        </Typography>
      </MobileSaveSection>
    </Box>
  );
};
