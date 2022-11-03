import { Card, Typography } from "@mui/material";
import { FC } from "react";
import { CardBase } from "./CardBase";

export const TwoFactor: FC = () => {
  return (
    <CardBase
      backgroundColor="#0040E3"
      backgroundElement={
        <svg
          display="block"
          viewBox="0 0 262 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 53.6253L11 58.6565C22 61.1721 44 68.719 66 71.2346C87 73.7502 109 73.7502 131 58.6565C153 41.0472 175 8.34428 197 0.797438C218 -4.23379 240 15.8911 251 23.438L262 33.5004V114H251C240 114 218 114 197 114C175 114 153 114 131 114C109 114 87 114 66 114C44 114 22 114 11 114H0V53.6253Z"
            fill="#0099FF"
          />
        </svg>
      }
    >
      <Typography variant="h6">เปิดใช้งานความปลอดภัย 2 ชั้น (2FA)</Typography>
      <Typography
        sx={{
          fontSize: 16,
          opacity: 0.6,
          fontWeight: 600,
        }}
      >
        เพื่อเพิ่มความปลอดภัยให้กับ การใช้งาน Kraikub ID
      </Typography>
    </CardBase>
  );
};
