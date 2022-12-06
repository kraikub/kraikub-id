import {
  Box,
  IconButton,
  InputBase,
  InputBaseProps,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import { FC, ReactNode, useState } from "react";
import { IoIosClose } from "react-icons/io";

interface InputProps {
  icon?: ReactNode;
  inputProps?: InputBaseProps;
  onClearInput?: () => void;
}

export const Input: FC<InputProps> = (props) => {
  const theme = useTheme();
  const [focus, setFocus] = useState(false);
  return (
    <Box
      sx={{
        px: "12px",
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderStyle: "solid",
        borderColor: focus ? theme.palette.info.main : theme.palette.divider,
        borderWidth: focus ? "2px" : "1px",
        boxSizing: "border-box",
        height: "34px",
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
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          sx={{
            width: "100%",
            fontSize: 16,
            height: "34px",
            color: theme.palette.text.primary,
          }}
          {...props.inputProps}
        />
      </Stack>
      {props.onClearInput !== undefined ? (
        <Box>
          <IconButton
            disableRipple
            disableFocusRipple
            size="small"
            sx={{
              p: "1px",
              backgroundColor: theme.palette.divider,
              fontSize: 24,
            }}
            onClick={props.onClearInput}
          >
            <IoIosClose />
          </IconButton>
        </Box>
      ) : null}
    </Box>
  );
};
