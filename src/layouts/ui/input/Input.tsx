import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { IoIosClose } from "react-icons/io";

interface InputProps {
  icon?: ReactNode;
}

export const Input: FC<InputProps> = (props) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        px: "12px",
        py: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{
          width: "100%",
        }}
      >
        {props.icon ? (
          <Box
            sx={{
              color: theme.palette.text.secondary,
              display: "flex",
              alignItems: "center",
              fontSize: 22,
            }}
          >
            {props.icon}
          </Box>
        ) : null}

        <InputBase
          type="email"
          sx={{
            width: "100%",
            fontSize: 16,
            fontWeight: 500,
            color: theme.palette.text.primary,
          }}
        />
      </Stack>
      <Box>
        <IconButton
          size="small"
          sx={{
            backgroundColor: theme.palette.divider,
          }}
        >
          <IoIosClose />
        </IconButton>
      </Box>
    </Paper>
  );
};
