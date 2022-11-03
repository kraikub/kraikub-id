import { Card, Typography } from "@mui/material";
import { FC } from "react";
import { CardBase } from "./CardBase";

export const NoVerifiedEmail: FC = () => {
  return (
    <CardBase
      backgroundColor="#E30000"
      backgroundElement={
        <svg
          display="block"
          viewBox="0 0 262 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0L10.9167 14.0952C21.8333 28.1905 43.6667 56.381 65.5 70.4762C87.3333 84.5714 109.167 84.5714 131 77.5238C152.833 70.4762 174.667 56.381 196.5 45.8095C218.333 35.2381 240.167 28.1905 251.083 24.6667L262 21.1429V148H251.083C240.167 148 218.333 148 196.5 148C174.667 148 152.833 148 131 148C109.167 148 87.3333 148 65.5 148C43.6667 148 21.8333 148 10.9167 148H0V0Z"
            fill="#C50000"
          />
        </svg>
      }
    >
      <Typography variant="h6">โปรดยืนยันอีเมล</Typography>
      <Typography sx={{
          fontSize: 16,
          opacity: 0.6,
          fontWeight: 600
        }}>
        เพื่อเพิ่มความปลอดภัยให้กับ การใช้งาน Kraikub ID
      </Typography>
    </CardBase>
  );
};
