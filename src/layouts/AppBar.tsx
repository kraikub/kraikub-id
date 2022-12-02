import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  Fade,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
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
import { TapIcon } from "../components/svg/Tap";

type Menu = {
  text: string | ReactNode;
  href: string;
  icon: ReactNode;
  iconSize?: string;
};

const mainMenus: Menu[] = [
  {
    text: "Your Account",
    href: "/account",
    icon: <MdAccountCircle />,
  },
  {
    text: "Security",
    href: "/security",
    icon: <BiLockAlt />,
    iconSize: "20px",
  },
  {
    text: (
      <>
        <span
          style={{
            fontWeight: 700,
          }}
        >
          KRAIKUB
        </span>
        <span
          style={{
            fontWeight: 400,
            marginLeft: "4px",
          }}
        >
          TAP
        </span>
      </>
    ),
    href: "/tap",
    icon: <TapIcon size={30} />,
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
    text: "Sign in activities",
    href: "/oauth2-activities",
    icon: <AiOutlineHistory />,
    iconSize: "20px",
  },
  {
    text: "Settings",
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
    name: "MENUS",
    list: mainMenus,
  },
  {
    name: "SHORTCUTS",
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
        fontSize: 12,
        fontWeight: 600,
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
  const mdSize = useMediaQuery(theme.breakpoints.up("md"));
  const [showDynamicNav, setShowDynamicNav] = useState<boolean>(true);
  const [openMenuModal, setOpenMenuModal] = useState<boolean>(false);

  useEffect(() => {
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
    <Box>
      <Fade in={mdSize || showDynamicNav}>
        <Box
          sx={{
            position: {
              xs: "sticky",
              sm: "sticky",
              md: "fixed",
            },
            top: 0,
            left: 0,
            right: 0,
            // backgroundColor: theme.palette.background.default,
            backdropFilter: "blur(30px)",
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
              className="letter-spacing-1"
              sx={{
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              KRAIKUB{" "}
              <Typography display="inline" fontWeight={400}>
                ID
              </Typography>
            </Typography>
          </Stack>
          <IconButton
            onClick={() => setOpenMenuModal(true)}
            sx={{
              fontSize: 20,
              color: "inherit",
              display: {
                md: "none",
              },
            }}
          >
            <FiMenu />
          </IconButton>
        </Box>
      </Fade>

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
      <Box
        sx={{
          pt: appbarConfig.navbar.height,
          minHeight: "100vh",
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
          <Box maxWidth={appbarConfig.content.maxWidth}>{children}</Box>
        </Container>
      </Box>
      <Drawer
        anchor="right"
        open={openMenuModal}
        PaperProps={{
          sx: {
            width: "100vw",
            backgroundColor: theme.palette.background.default,
            backgroundImage: "none",
            px: "8px",
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
