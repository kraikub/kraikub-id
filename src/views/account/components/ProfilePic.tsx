import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ProfilePic = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
      spacing={2}
        sx={{
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "400px",
              md: "310px",
            },
            backgroundImage: `url(/profiles/girl-007.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            aspectRatio: "1/1",
          }}
        ></Box>
        <Typography variant="h6" className="letter-spacing-1" fontWeight={700}>MR. NUTCHANON CHANTRASUP</Typography>
        <Typography sx={{
          fontSize: 18,
          fontWeight: 500,
          opacity: 0.7
        }}>นาย ณัฐชนน จันทรศัพท์</Typography>
      </Stack>
    </Box>
  );
};
