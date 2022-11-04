import { Box } from "@mui/system"
import { FC } from "react";

interface BlockSpacingProps {
  spacing: string;
}

export const BlockSpacing: FC<BlockSpacingProps> = (props) => {
  return (
    <Box sx={{
      my: props.spacing || "20px",
    }}></Box>
  )
}