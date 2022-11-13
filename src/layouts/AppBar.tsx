import {
  Box,
  Button,
  ButtonBase,
  Collapse,
  Divider,
  Drawer,
  Fade,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { appbarConfig } from "../config/appbar_config";
import { MdAccountCircle } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { Container } from "@mui/system";
import { AiOutlineScan, AiOutlineHistory } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

type Menu = {
  text: string;
  href: string;
  icon: ReactNode;
  iconSize?: string;
};

const mainMenus: Menu[] = [
  {
    text: "บัญชีของคุณ",
    href: "/account",
    icon: <MdAccountCircle />,
  },
  {
    text: "ความปลอดภัย",
    href: "/security",
    icon: <BiLockAlt />,
    iconSize: "20px",
  },
  {
    text: "Student Scan",
    href: "/whois",
    icon: <AiOutlineScan />,
    iconSize: "20px",
  },
];

const shortcuts: Menu[] = [
  {
    text: "Profile Gallery",
    href: "/profile-gallery",
    icon: <BsImage />,
  },
  {
    text: "กิจกรรมการเข้าสู่ระบบ",
    href: "/oauth2-activities",
    icon: <AiOutlineHistory />,
    iconSize: "20px",
  },
  {
    text: "ตั้งค่า",
    href: "/settings",
    icon: <IoSettingsOutline />,
    iconSize: "20px",
  },
];

const gridButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
};

const groups = [
  {
    name: "หน้าหลัก",
    list: mainMenus,
  },
  {
    name: "ทางลัด",
    list: shortcuts,
  },
];

const Menu: FC<Menu> = ({ text, href, icon, iconSize }) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Button
      disableRipple
      variant="contained"
      sx={{
        backgroundColor:
          router.pathname === href
            ? theme.palette.background.paper
            : "transparent",
        fontSize: 14,
        paddingX: "10px",
        textAlign: "start",
        alignItems: "center",
        height: "50px",
        color:
          router.pathname === href
            ? theme.palette.text.primary
            : theme.palette.text.secondary,
        "&:hover": {
          backgroundColor: theme.palette.background.paper,
        },
      }}
      onClick={() => router.push(href)}
    >
      <Grid container>
        <Grid
          item
          xs={1}
          sx={{
            ...gridButtonStyles,
            fontSize: iconSize || "20px",
          }}
        >
          {icon}
        </Grid>
        <Grid
          item
          xs={11}
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
  );
};

interface AppBarProps {
  children?: any;
}

export const AppBar: FC<AppBarProps> = ({ children }) => {
  const theme = useTheme();
  const router = useRouter();
  const scrollRef = useRef<number>(0);
  const dimensionY = useRef<number>(0);
  const [showBottomNav, setShowBottomNav] = useState<boolean>(true);
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);

  useEffect(() => {
    dimensionY.current = window.innerHeight;
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY === scrollRef.current) {
          return;
        }
        if (window.scrollY < 0) {
          return setShowBottomNav(true);
        }
        if (
          window.scrollY > scrollRef.current ||
          window.screenY >= dimensionY.current
        ) {
          // downscroll code
          setShowBottomNav(false);
        } else {
          // upscroll code
          setShowBottomNav(true);
        }
        scrollRef.current = window.scrollY;
        console.log(scrollRef.current);
      },
      false
    );
  }, []);

  return (
    <Box>
      <Box
        sx={{
          position: {
            xs: "relative",
            sm: "relative",
            md: "fixed",
          },
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: theme.palette.background.default,
          height: appbarConfig.navbar.height,
          px: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 39,
        }}
      >
        <Stack direction="row" alignItems="center" spacing="5px">
          <Typography
            variant="h6"
            className="letter-spacing-1"
            sx={{
              fontSize: 18,
            }}
          >
            Kraikub
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid",
              borderColor: theme.palette.text.primary,
              fontSize: 14,
              fontWeight: 600,
              width: "24px",
              height: "24px",
              borderRadius: "6px",
            }}
          >
            ID
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          position: "fixed",
          top: appbarConfig.navbar.height,
          left: 0,
          zIndex: 32,
          width: appbarConfig.sizebar.width,
          height: appbarConfig.sizebar.height,
          pl: "20px",
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
        }}
      >
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
      </Box>
      <Box
        sx={{
          mt: appbarConfig.navbar.height,
          ml: {
            xs: 0,
            sm: 0,
            md: appbarConfig.sizebar.width,
          },
        }}
      >
        <Container
          sx={{
            pb: "100px",
          }}
        >
          {children}
        </Container>
      </Box>
      <Fade in={showBottomNav}>
        <Paper
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
            },
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 35,
            backgroundColor: theme.palette.background.default,
            p: 0,
          }}
        >
          <Divider />
          <Grid
            container
            sx={{
              overflow: "visible",
            }}
          >
            <Grid item xs={4} sx={{ ...gridButtonStyles }}></Grid>
            <Grid item xs={4} sx={{ ...gridButtonStyles }}>
              <IconButton
                sx={{
                  fontSize: 28,
                  color: theme.palette.text.primary,
                }}
              >
                <AiOutlineScan />
              </IconButton>
            </Grid>
            <Grid item xs={4} sx={{ ...gridButtonStyles }}>
              <IconButton
                onClick={() => setOpenMenuModal(true)}
                sx={{
                  fontSize: 20,
                  color: theme.palette.text.primary,
                }}
              >
                <FiMenu />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
      <Drawer
        anchor="right"
        open={openMenuModal}
        PaperProps={{
          sx: {
            width: "100vw",
            backgroundColor: theme.palette.background.default,
            backgroundImage: "none",
          },
        }}
        onClose={() => setOpenMenuModal(false)}
      >
        <Box
          sx={{
            py: "20px",
            px: "10px",
          }}
        >
          <Button
            color="primary"
            onClick={() => setOpenMenuModal(false)}
            variant="text"
            sx={{
              fontSize: 18,
            }}
          >
            <IoIosArrowBack /> Back
          </Button>
        </Box>
        <Container>
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
        </Container>
      </Drawer>
    </Box>
  );
};
