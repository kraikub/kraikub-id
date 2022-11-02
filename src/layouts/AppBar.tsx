import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { appbarConfig } from "../config/appbar_config";
import { MdAccountCircle } from "react-icons/md";
import { BiLockAlt } from "react-icons/bi";
import { Container, fontSize, padding } from "@mui/system";
import { AiOutlineScan } from "react-icons/ai";
type Menu = {
  text: string;
  href: string;
  icon: ReactNode;
  iconSize?: string;
};

const menus: Menu[] = [
  {
    text: "บัญชีของคุณ",
    href: "/account",
    icon: <MdAccountCircle />,
  },
  {
    text: "ความปลอดภัย",
    href: "/security",
    icon: <BiLockAlt />,
    iconSize: "24px",
  },
  {
    text: "Student Scan",
    href: "/whois",
    icon: <AiOutlineScan />,
    iconSize: "24px",
  },
];

const gridButtonStyles = {
  display: "flex",
  alignItems: "center",
};

const Menu: FC<Menu> = ({ text, href, icon, iconSize }) => {
  const router = useRouter();
  return (
    <Button
      disableRipple
      variant="contained"
      size="large"
      sx={{
        backgroundColor: router.pathname === href ? "#ffffff10" : "transparent",
        fontSize: 14,
        paddingX: "10px",
        textAlign: "start",
        alignItems: "center",
        color: router.pathname === href ? "#ffffff" : "#ffffffd0",
        "&:hover": {
          backgroundColor: "#ffffff10",
        },
      }}
      onClick={() => router.push(href)}
    >
      <Grid container>
        <Grid
          item
          xs={2}
          sx={{
            ...gridButtonStyles,
            fontSize: iconSize || "30px",
            justifyContent: "center",
          }}
        >
          {icon}
        </Grid>
        <Grid item xs={10} sx={{ ...gridButtonStyles, pl: "20px" }}>
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
              borderColor: "#ffffffa0",
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
        <Stack>
          {menus.map((menu, index) => {
            return <Menu key={`menu-${menu.text}-${index}`} {...menu} />;
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
        <Container>{children}</Container>
      </Box>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: `${theme.palette.background.default}e0`,
            zIndex: 35,
            backdropFilter: "blur(30px)",
            px: "20px",
            border: "solid",
            borderColor: "#ffffff20",
            borderWidth: "1px 0 0 0",
          },
        }}
      >
        <Grid container>
          {menus.map((menu, index) => {
            return (
              <Grid
                item
                xs={12 / menus.length}
                key={`bottom-nav-menu-${index}`}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  py: "10px",
                  fontSize: menu.iconSize || "24px",
                  cursor: "pointer",
                }}
                onClick={() => router.push(menu.href)}
                
              >
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {menu.icon}
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >{menu.text}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};
