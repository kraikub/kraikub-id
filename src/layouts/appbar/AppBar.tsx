import {
  Box,
  Button,
  Drawer,
  Fade,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { appbarConfig } from "../../config/appbar_config";
import { MdAccountCircle } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { Container } from "@mui/system";
import { AiOutlineHistory } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp, IoIosDownload } from "react-icons/io";
import { TbCode } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FiDownload, FiLogOut } from "react-icons/fi";
import { GithubBanner } from "../../components/banners/Github";
import { SquareIconButton } from "../../components/buttons/SquareIconButton";
import { useTranslation } from "react-i18next";

type Menu = {
  text: string | ReactNode;
  href: string;
  icon: ReactNode;
  iconSize?: string;
};

const gridButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
};

const Menu: FC<Menu> = ({ text, href, icon, iconSize }) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      sx={{
        px: "8px",
        position: "relative",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: router.pathname === href ? "block" : "none",
          position: "absolute",
          top: "25%",
          bottom: "25%",
          left: 0,
          width: "5px",
          borderRadius: "0 20px 20px 0",
          backgroundColor: theme.palette.info.main,
        }}
      ></Box>
      <Button
        disableRipple
        variant="contained"
        sx={{
          width: "100%",
          overflow: "hidden",
          textTransform: "none",
          backgroundColor:
            router.pathname === href
              ? theme.palette.secondary.main
              : "transparent",
          borderRadius: "14px",
          fontSize: 16,
          fontWeight: router.pathname === href ? 600 : 400,
          paddingX: "10px",
          textAlign: "start",
          alignItems: "center",
          height: "50px",
          color: theme.palette.text.primary,
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }}
        onClick={() => router.push(href, href, { locale: router.locale })}
      >
        <Grid container>
          <Grid
            item
            xs={2}
            sx={{
              ...gridButtonStyles,
              fontSize: iconSize || "22px",
            }}
          >
            {icon}
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              ...gridButtonStyles,
              pl: "20px",
              textAlign: "start",
              justifyContent: "start",
            }}
          >
            {text}
          </Grid>
        </Grid>
      </Button>
    </Box>
  );
};

interface AppBarProps {
  children?: any;
}

export const AppBar: FC<AppBarProps> = ({ children }) => {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation("appbar");
  const [rightSideBanner, setRightSideBanner] = useState(false);
  const scrollRef = useRef<number>(0);
  const dimensionY = useRef<number>(0);
  const mdSize = useMediaQuery(theme.breakpoints.up("md"));
  const [showDynamicNav, setShowDynamicNav] = useState<boolean>(true);
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);

  const externalLinks = [
    {
      text: t("extra-developers"),
      href: "https://app.kraikub.com/projects/manager",
      icon: <TbCode />,
    },
  ];

  const externalLinkGroup = [
    {
      name: "",
      list: externalLinks,
    },
  ];
  const mainMenus: Menu[] = [
    {
      text: t("m-account-settings"),
      href: "/account",
      icon: <MdAccountCircle />,
      iconSize: "24px",
    },
    {
      text: t("m-activities"),
      href: "/oauth2-activities",
      icon: <AiOutlineHistory />,
    },
    {
      text: t("m-app-settings"),
      href: "/settings",
      icon: <IoSettingsOutline />,
    },
  ];

  const groups = [
    {
      name: "",
      list: mainMenus,
    },
  ];

  function handleResize() {
    if (
      window.innerWidth <
      appbarConfig.sidebar.number.width +
        appbarConfig.content.number.maxWidth +
        appbarConfig.rightBanner.number.width +
        18
    ) {
      setRightSideBanner(false);
    } else {
      setRightSideBanner(true);
    }
  }

  useEffect(() => {
    // Window size
    window.addEventListener("resize", handleResize);
    handleResize();

    // Scroll
    dimensionY.current = document.body.scrollHeight;
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY === scrollRef.current) {
          return;
        }
        if (window.scrollY < 0) {
          return setShowDynamicNav(true);
        }
        if (
          window.scrollY > scrollRef.current ||
          window.scrollY + window.innerHeight >= dimensionY.current
        ) {
          // downscroll code
          setShowDynamicNav(false);
        } else {
          // upscroll code
          setShowDynamicNav(true);
        }
        scrollRef.current = window.scrollY;
      },
      false
    );
  }, []);

  return (
    <Box
      sx={
        {
          // background: `linear-gradient(#191b1f08, #191b1f08), linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default})`,
        }
      }
    >
      {/* Bottom bar in moblie */}
      <Paper
      elevation={1}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          borderRadius: 0,
          backgroundColor: theme.palette.background.paper,
          height: appbarConfig.navbar.height,
          borderStyle: "solid",
          borderWidth: "1px 0 0 0",
          borderColor: theme.palette.divider,
          py: "32px",
          px: "28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 39,
        }}
      >
        <Stack direction="row" alignItems="center" spacing="5px">
          <Typography fontWeight={700} letterSpacing="-0.05em">KRAIKUB <Typography display="inline" fontWeight={400}>ID</Typography></Typography>
        </Stack>
        <Stack direction="row" spacing="12px">
          <Button
            onClick={() => setOpenMenuModal(true)}
            color="secondary"
            variant="contained"
            sx={{
              p: "3px",
              fontSize: 22,
              minWidth: "32px",
              width: "32px",
              aspectRatio: "1/1",
              borderRadius: "1000px",
              color: "inherit",
              display: {
                md: "none",
              },
            }}
          >
            <IoIosArrowUp />
          </Button>
        </Stack>
      </Paper>

      <Box
        sx={{
          position: "fixed",
          borderRadius: 0,
          top: 0,
          left: 0,
          zIndex: 32,
          width: appbarConfig.sidebar.width,
          height: appbarConfig.sidebar.height,
          pt: `${appbarConfig.navbar.number.height + 40}px`,
          pb: "12px",
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
          },
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Stack spacing={4} width="100%">
            {groups.map((g, index) => {
              return (
                <Box key={`menu-group-${index}`}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {g.name}
                  </Typography>
                  <Stack mt={1}>
                    {g.list.map((menu, index) => {
                      return (
                        <Menu key={`menu-${menu.text}-${index}`} {...menu} />
                      );
                    })}
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Box>
        <Stack spacing={1} width="100%">
          {externalLinkGroup.map((g, index) => {
            return (
              <Box key={`menu-group-${index}`}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {g.name}
                </Typography>
                <Stack mt={1}>
                  {g.list.map((menu, index) => {
                    return (
                      <Menu key={`menu-${menu.text}-${index}`} {...menu} />
                    );
                  })}
                </Stack>
              </Box>
            );
          })}
          <Box
            sx={{
              px: "8px",
              width: "100%",
            }}
          >
            <Button
              size="large"
              color="secondary"
              variant="contained"
              sx={{
                borderRadius: "12px",
                width: "100%",
                gap: 1,
                textTransform: "none",
              }}
            >
              <FiLogOut /> {t("logout")}
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          pt: appbarConfig.navbar.height,
          minHeight: "100vh",
          width: "100%",
          maxWidth: "1300px",
          pl: {
            xs: 0,
            sm: 0,
            md: appbarConfig.sidebar.width,
          },
        }}
      >
        <Container
          sx={{
            pt: "40px",
            pb: "100px",
            px: {
              xs: "0px",
              sm: "0px",
              md: "18px",
            },
          }}
          maxWidth="md"
        >
          {children}
        </Container>
      </Box>
      <Drawer
        anchor="bottom"
        open={openMenuModal}
        PaperProps={{
          sx: {
            width: "100vw",
            height: "100vh",
            backgroundColor: theme.palette.background.default,
            backgroundImage: "none",
            pl: "0",
          },
        }}
        onClose={() => setOpenMenuModal(false)}
      >
        <Box
          sx={{
            py: "20px",
            px: "0",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            onClick={() => setOpenMenuModal(false)}
            color="secondary"
            variant="contained"
            sx={{
              p: "3px",
              fontSize: 20,
              minWidth: "40px",
              width: "40px",
              aspectRatio: "1/1",
              borderRadius: "1000px",
              color: "inherit",
              display: {
                md: "none",
              },
            }}
          >
            <IoIosArrowDown />
          </Button>
        </Box>
        <Stack>
          <Stack spacing={4}>
            {groups.map((g, index) => {
              return (
                <Box key={`menu-group-${index}`}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {g.name}
                  </Typography>
                  <Stack mt={1}>
                    {g.list.map((menu, index) => {
                      return (
                        <Menu key={`menu-${menu.text}-${index}`} {...menu} />
                      );
                    })}
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
};
