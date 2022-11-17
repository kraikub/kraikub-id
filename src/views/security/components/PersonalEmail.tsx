import { Stack, Typography } from "@mui/material";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

export const PersonalEmail = () => {
  return (
    <ChoiceCard
      title="อีเมลสส่วนตัว"
      description={
        <Stack spacing={2}>
          <Typography>
            คุณยังไม่ได้ยืนยันอีเมลสส่วนตัว
          </Typography>
          <Typography variant="body2">
            ต้องไม่ใช้ @ku.th
          </Typography>
        </Stack>
      }
      choice={[
        {
          text: "ยืนยันอีเมลสส่วนตัว",
        },
      ]}
    />
  );
};
