import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Skeleton,
  Paper,
} from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      location.href = "/account";
    }, 2000);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Paper
            className="spin"
            elevation={4}
            sx={{
              overflow: "hidden",
              p: 0,
              borderRadius: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/resources/kraikub-logo-transparent.png" width={60} />
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}
