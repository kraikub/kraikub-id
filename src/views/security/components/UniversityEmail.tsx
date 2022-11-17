import { Typography } from "@mui/material";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";

export const UniversityEmail = () => {
  return (
    <ChoiceCard
      title="อีเมลมหาวิทยาลัย"
      description={
        <Typography>คุณยังไม่ได้ยืนยันอีเมลมหาวิทยาลัย @ku.th</Typography>
      }
      choice={[
        {
          text: "ยืนยันอีเมลมหาวิทยาลัย",
        },
      ]}
    />
  );
};
