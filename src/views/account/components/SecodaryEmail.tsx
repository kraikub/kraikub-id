import { Box, Card, Typography } from "@mui/material";
import { FC } from "react";
import { CardBase } from "./CardBase";

export const SecodaryEmail: FC = () => {
  return (
    <CardBase
      backgroundColor="#06FFD2"
      backgroundElement={
        <svg
          display="block"
          viewBox="0 0 262 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 33.6H10.9167C21.8333 33.6 43.6667 33.6 65.5 25.2C87.3333 16.8 109.167 0 131 0C152.833 0 174.667 16.8 196.5 31.5C218.333 46.2 240.167 58.8 251.083 65.1L262 71.4V84H251.083C240.167 84 218.333 84 196.5 84C174.667 84 152.833 84 131 84C109.167 84 87.3333 84 65.5 84C43.6667 84 21.8333 84 10.9167 84H0V33.6Z"
            fill="#00DEC3"
          />
        </svg>
      }
    >
      <Box sx={{
        color: "#000000"
      }}>
        <Typography variant="h6">เพิ่มอีเมลสำรอง</Typography>
        <Typography sx={{
          fontSize: 16,
          opacity: 0.6,
          fontWeight: 600
        }}>
          เพื่อเพิ่มความปลอดภัยให้กับ การใช้งาน Kraikub ID
        </Typography>
      </Box>
    </CardBase>
  );
};
