import { Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PaperSection } from "../../../layouts/ui/section/PaperSection";

export const ProfilePic = () => {
  return (
    <PaperSection>
      <Stack spacing={3} direction="row" justifyContent="start">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center,",
          }}
        >
          <Box
            sx={{
              width: "76px",
              backgroundImage: `url(/resources/default-profile.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "6px",
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
          <Box>
            <Typography variant="h6" fontSize={18}>
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
    </PaperSection>
  );
};
