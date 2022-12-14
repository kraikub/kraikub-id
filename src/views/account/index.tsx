import { Box, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { UserProvider } from "../../contexts/User";
import { AppBar } from "../../layouts/appbar/AppBar";
import { MultiSection } from "../../layouts/ui/section/MultiSection";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";
import { Notification } from "./components/Notification";
import { Profile } from "./components/Profile";
import { TwoFactor } from "./components/TwoFactor";

interface AccountPageProps {
  u: UserWithStudent | null;
}


export const AccountPage: NextPage<AccountPageProps> = (props) => {
  const { t } = useTranslation(["account"])
  return (
    <UserProvider user={props.u}>
      <Head>
        <title>Account</title>
      </Head>
      <AppBar>
        <MultiSection>
          <Box>
            <PageHeading>{t('index.page-heading')}</PageHeading>
            <Typography>{t('index.page-description')}</Typography>
          </Box>
          <Container maxWidth="sm">
            <Profile />
          </Container>
          <Box>
            <Notification />
          </Box>
          <Box>
            <TwoFactor />
          </Box>
        </MultiSection>
      </AppBar>
    </UserProvider>
  );
};
