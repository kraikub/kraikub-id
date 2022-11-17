import { Stack, Typography } from "@mui/material";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

export const TwoFactor = () => {
  return (
    <ChoiceCard
      title="Two Factor Authentication (2FA)"
      description={
        <Stack spacing={2}>
          <Typography>
            เปิดใช้งานระบบความปลอดภัยสองชั้นเพื่อป้องกันการเข้าสู่ระบบที่อาจไม่ปลอดภัยต่อบัญชีของคุณ
          </Typography>
          <Typography variant="body2">
            ระบบความปลอดภัยสองชั้นจะส่งรหัสยืนยันไปที่<strong>อีเมลส่วนตัว</strong>ของคุณทุกครั้งที่มีการเข้าสู่ระบบด้วย
            KU
          </Typography>
        </Stack>
      }
      choice={[
        {
          text: "เปิดใช้งาน 2FA",
          onClick: () => {
            alert("กรุณายืนยันอีเมลส่วนตัวของคุณ");
          }
        },
      ]}
    />
  );
};
