import {
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter()

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
          {/* <Paper
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
          </Paper> */}
          <Typography variant="h5">อดใจรออีกนิด</Typography>
          <Typography>เราทำคนเดียวนะ แค่นี้ก็ถือว่าเร็วแล้ว - beam</Typography>
        </Stack>
      </Container>
    </Box>
  );
}
