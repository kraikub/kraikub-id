import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { LinkWrap } from "../../layouts/ui/link/LinkWrap";

export const GithubBanner = () => {
  return (
    <Paper
      sx={{
        backgroundColor: "#1c202e",
        color: "#ffffff",
      }}
    >
      <Typography variant="h6" color="inherit" fontSize={18}>
        Contribute on GitHub.
      </Typography>
      <Typography variant="body2" color="inherit">
        All PRs are welcome. This will make Kraikub better :D
      </Typography>
      <LinkWrap href="https://github.com/kraikub">
        <Button
          color="secondary"
          sx={{
            my: 2,
            backgroundColor: "#ffffff20",
            gap: 1,
            color: "white"
          }}
        >
          Contribute <IoIosArrowForward />
        </Button>
      </LinkWrap>
    </Paper>
  );
};
