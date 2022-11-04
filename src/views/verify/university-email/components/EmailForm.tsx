import { Input } from "../../../../layouts/ui/input/Input";
import { HiOutlineMail } from "react-icons/hi";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const EmailForm = () => {
  return (
    <Box>
      <Typography variant="body1" mb={2}>กรอกอีเมบมหาวิทยาลัยของคุณ (ลงท้ายด้วย @ku.th)</Typography>
      <Input  />
    </Box>
  );
};
