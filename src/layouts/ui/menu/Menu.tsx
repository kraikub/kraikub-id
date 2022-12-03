import { Paper, Stack, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoAlertCircle } from "react-icons/io5";
import { MuiPaperSx } from "../../../styles/mui/custom-mui-sx";
import { LinkWrap } from "../link/LinkWrap";
import { PaperSection } from "../section/PaperSection";

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
      <PaperSection
        sx={{
          p: "18px",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          ...MuiPaperSx.disableBorderRadiusOnMobile,
          borderStyle: "solid",
          borderColor: theme.palette.divider,
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          {props.text}
        </Typography>
        <Stack direction="row" alignItems="center" spacing={3}>
          {whichIcon(props.mark)}
          <IoIosArrowForward />
        </Stack>
      </PaperSection>
    </LinkWrap>
  );
};
