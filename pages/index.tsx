import { Box, Container, Typography, Stack, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4" className="letter-spacing-2">
          One Account, for Kasetsart University
        </Typography>
        <Typography variant="body1">
          จัดการ Kraikub ID ของคุณสำหรับใช้งานในมหาวิทยาลัย
        </Typography>
        <Box py={4}>
          <Link href="/account">
            <Button
              variant="contained"
              size="large"
              sx={{
                gap: 2,
              }}
            >
              ดำเนินการต่อด้วยบัญชี KU
              <FiArrowRight />
            </Button>
          </Link>
        </Box>
      </Stack>
    </Container>
  );
}
