import {
  Box,
  Button,
  Card,
  Divider,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { ChoiceCard } from "../../../layouts/ChoiceCard";

interface UseSuggestionEmailProps {
  suggestedEmail: string;
}

export const UseSuggestionEmail: FC<UseSuggestionEmailProps> = ({
  suggestedEmail,
}) => {
  const theme = useTheme();

  const bodyText = (
    <>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.primary,
        }}
      >
        บัญชีของคุณยังไม่ได้ยืนยันอีเมลสำรอง ต้องการใช้
        <Typography
          component="span"
          color={theme.palette.info.main}
          fontSize="inherit"
          fontWeight={600}
          sx={{
            display: "inline",
          }}
        >
          {" "}
          {suggestedEmail}{" "}
        </Typography>
        เป็นอีเมลสำรองของคุณหรือไม่
      </Typography>
    </>
  );

  const choice = [
    {
      text: "ไม่, ใช้อีเมลอื่น",
    },
    {
      text: "ใช่",
    },
  ]

  return <ChoiceCard title="ยืนยันอีเมลสำรอง" description={bodyText} choice={choice}/>;
};
