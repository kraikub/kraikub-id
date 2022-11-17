import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ProfilePic = () => {
  return (
    <Paper>
      <Stack
        spacing={3}
        direction={{
          xs: "column",
          sm: "row",
        }}
        justifyContent={{
          xs: "center",
          sm: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center,",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "60%",
                sm: "76px",
              },
              backgroundImage: `url(/resources/default-profile.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20000px",
              aspectRatio: "1/1",
              alignSelf: "flex-start",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            textAlign={{
              xs: "center",
              sm: "start",
            }}
          >
            <Typography
              variant="h6"
              className="letter-spacing-1"
              fontWeight={700}
              fontSize={18}
            >
              MR. NUTCHANON CHANTRASUP
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                opacity: 0.7,
              }}
            >
              นาย ณัฐชนน จันทรศัพท์
            </Typography>
          </Box>
        </Box>
      </Stack>
      <Divider
        sx={{
          my: 2,
        }}
      />
    </Paper>
  );
};
