import { Input } from "../../../../layouts/ui/input/Input";
import { HiOutlineMail } from "react-icons/hi";
import { Box } from "@mui/system";
import { Alert, AlertTitle, Button, Stack, Typography } from "@mui/material";

export const EmailForm = () => {
  return (
    <Box>
      <Typography variant="body1" mb={2}>
        กรอกอีเมลมหาวิทยาลัยเกษตรศาสตร์ของคุณ (ลงท้ายด้วย @ku.th)
      </Typography>
      <Input
        inputProps={{
          placeholder: "name.example@ku.th",
        }}
      />
      <Box my={2}>
        <Typography variant="body2">
          อีเมลยืนยันจาก Kraikub อาจใช้เวลาตั้งแต่ 1 - 5
          นาทีในการส่งไปที่อีเมลของคุณ
        </Typography>
      </Box>
      <Alert severity="success">
        <AlertTitle>อีเมลกำลังเดินทางไปหาคุณ!</AlertTitle>
        เราได้ดำเนินการส่งอีเมลยืนยันไปที่ nutchanon.chant@ku.th เรียบร้อยแล้ว
      </Alert>
      <Alert severity="error">
        <AlertTitle>อีเมลนี้ถูกใช้งานไปแล้ว!</AlertTitle>
        คุณไม่สามารถใช้ nutchanon.chant@ku.th เป็นอีเมลของคุณได้เนื่องจากมีผู้เชื่อมต่ออีเมลนี้ไปก่อนหน้านี้แล้ว หากต้องการความช่วยเหลือ - <strong>ติดต่อเรา</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>ต้องเป็นอีเมล @ku.th เท่านั้น</AlertTitle>
        อีเมลมหาวิทยาลัยจะต้องลงท้าย @ku.th เท่านั้น - <strong>ติดต่อเรา</strong>
      </Alert>
      <Stack my={3} direction="row" spacing={3}>
        <Button variant="contained" size="large">
          ส่งอีเมลยืนยัน
        </Button>
      </Stack>
    </Box>
  );
};
