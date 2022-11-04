import { Box, Divider, Paper, Typography } from "@mui/material"
import { FC } from "react";

interface GroupCardBaseProps {
  children?: any;
  title: string;
}

export const GroupCardBase: FC<GroupCardBaseProps> = ({children, title}) => {
  return (
    <Paper sx={{
      my: "20px",
      py: "30px",
      px: "18px",
    }}>
    <Typography variant="h6" fontSize={16} sx={{
      opacity: 0.8,
    }}>{title}</Typography>
    <Divider sx={{
      my: 2,
      opacity: 0.5,
    }}/>
    <Box sx={{
      mt: "10px"
    }}>{children}</Box>
    </Paper>
  )
}