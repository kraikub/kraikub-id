import {
  Box,
  Button,
  Drawer,
  Fade,
  Grid,
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
import { AiOutlineHistory } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

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
            ? theme.palette.secondary.main
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
          backgroundColor: theme.palette.secondary.light,
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
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: theme.palette.background.default,
            height: appbarConfig.navbar.height,
            borderStyle: "solid",
            borderWidth: "0 0 1px 0",
            borderColor: theme.palette.divider,
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
          <Button
            onClick={() => setOpenMenuModal(true)}
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
      </Fade>

      <Box
        sx={{
          position: "fixed",
          top: appbarConfig.navbar.height,
          left: 0,
          zIndex: 32,
          width: appbarConfig.sizebar.width,
          height: appbarConfig.sizebar.height,
          px: "8px",
          pt: "30px",
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
          background: `linear-gradient(#00000006, #00000006), linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default})`,
          ml: {
            xs: 0,
            sm: 0,
            md: appbarConfig.sizebar.width,
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
              md: "30px",
            },
          }}
        >
          <Box maxWidth={appbarConfig.content.maxWidth}>{children}</Box>
        </Container>
      </Box>
      <Drawer
        anchor="top"
        open={openMenuModal}
        PaperProps={{
          sx: {
            width: "100vw",
            height: "100vh",
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
            <IoIosArrowUp />
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
