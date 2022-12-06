import { Grid, Stack, SxProps, Theme, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactNode } from "react";
import { CustomInputSx } from "../../../styles/mui/custom-mui-sx";
import { UseSuggestionEmail } from "./UseSuggestionEmail";

interface EachGridProps {
  children?: any;
  title?: ReactNode;
  gridTitleProps?: SxProps<Theme>;
  gridContentProps?: SxProps<Theme>;
  disableResize?: boolean;
}

const EachGrid: FC<EachGridProps> = (props) => {
  const shouldResize = (r: number) => props.disableResize ? r : 12
  return (
    <Grid container>
      <Grid
        item
        xs={shouldResize(3)}
        sm={shouldResize(3)}
        md={3}
        sx={{
          px: "20px",
          pl: 0,
          mb: 2,
          display: "flex",
          justifyContent: {
            xs: "start",
            sm: "start",
            md: "end",
          },
          ...props.gridTitleProps,
        }}
      >
        <strong>{props.title}</strong>
      </Grid>
      <Grid
        item
        xs={shouldResize(9)}
        sm={shouldResize(9)}
        md={9}
        sx={{
          ...props.gridContentProps,
        }}
      >
        <Typography>{props.children}</Typography>
      </Grid>
    </Grid>
  );
};

export const Profile = () => {
  return (
    <Stack
      spacing={4}
      sx={{
        my: 5,
      }}
    >
      <EachGrid
      disableResize
        title={
          <Box
            sx={{
              width: "46px",
              backgroundImage: `url(/resources/default-profile.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "600px",
              aspectRatio: "1/1",
              alignSelf: "flex-start",
            }}
          ></Box>
        }
      >
        <Box>
          <Typography variant="h6" fontSize={14}>
            MR. NUTCHANON CHANTRASUP
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              opacity: 0.7,
            }}
          >
            นาย ณัฐชนน จันทรศัพท์
          </Typography>
        </Box>
      </EachGrid>

      <EachGrid
        title="Email"
        gridTitleProps={{
          py: CustomInputSx.py,
        }}
      >
        <UseSuggestionEmail suggestedEmail="beamuonly@gmail.com" />
      </EachGrid>

      <EachGrid title="Joined date">
        <Typography>{new Date().toLocaleString()}</Typography>
      </EachGrid>
    </Stack>
  );
};
