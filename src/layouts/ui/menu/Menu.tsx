import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoAlertCircle } from "react-icons/io5";
import { LinkWrap } from "../link/LinkWrap";

interface Menu extends Choice {
  mark?: string;
}

export const Menu: FC<Menu> = (props) => {
  const theme = useTheme();

  const whichIcon = (mark: string | undefined): ReactNode | null => {
    if (!mark) {
      return null;
    }
    if (mark === "important") {
      return <IoAlertCircle color={theme.palette.error.main} size="28px" />;
    }
  };

  return (

    <LinkWrap href={props.href}>
      <Paper
        sx={{
          p: "18px",
          height: "46px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: theme.palette.divider,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          {props.text}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={3}>
          {whichIcon(props.mark)}
          <IoIosArrowForward />
        </Stack>
      </Paper>
    </LinkWrap>
  );
};
