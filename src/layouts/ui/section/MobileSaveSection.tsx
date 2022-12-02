import { Box } from "@mui/material";
import { FC } from "react";

interface MobileSaveSectionProps {
  children?: any;
}

export const MobileSaveSection: FC<MobileSaveSectionProps> = ({ children }) => {
  return (
    <Box sx={{
      padding: {
        xs: "18px",
        sm: "18px",
        md: "0px",
      }
    }}>{children}</Box>
  )
}