import { Paper, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { BsBorderWidth } from "react-icons/bs";

interface ArtboardProps {
  url: string;
}

export const Artboard: FC<ArtboardProps> = (props) => {
  const theme = useTheme();
  return (
    <>
      <Paper
        sx={{
          backgroundColor: "transparent",
          backgroundImage: `url(${props.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "1/1",
          width: "100%",
          borderStyle: "solid",
          borderWidth: "2px",
          borderColor: theme.palette.background.default,
        }}
      ></Paper>
    </>
  );
};
