import { Input } from "../../../../layouts/ui/input/Input";
import { HiOutlineMail } from "react-icons/hi";
import { Box } from "@mui/system";
import { Alert, AlertTitle, Button, Stack, Typography } from "@mui/material";

export const EmailForm = () => {
  return (
    <Box>
      <Typography variant="body1" mb={2}>
        Enter your university email (ends with @ku.th)
      </Typography>
      <Input
        inputProps={{
          placeholder: "name.example@ku.th",
        }}
      />
      <Box my={2}>
        <Typography variant="body2">
          This should takes about 1 - 5 mins.
        </Typography>
      </Box>
      <Alert severity="success">
        <AlertTitle>All good! We are proccessing your verification.</AlertTitle>
        An verification email will arrive <strong>{"nutchanon.chant@ku.th"}</strong> inbox as soon as possible.
      </Alert>
      <Alert severity="error">
        <AlertTitle>This email has already been used by someone.</AlertTitle>
        You cannot use {"nutchanon.chant@ku.th"} as your university email. Please feel free to contact us if you want any help. - <strong>Contact us</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>University email needs to end with @ku.th</AlertTitle>
        You enter a wrong pattern email - <strong>Contact us</strong>
      </Alert>
      <Stack my={3} direction="row" spacing={3}>
        <Button variant="contained" size="large">
          Send me an verify email
        </Button>
      </Stack>
    </Box>
  );
};
