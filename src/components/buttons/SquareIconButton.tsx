import { Button } from "@mui/material";
import { FC } from "react";

interface SquareIconButtonProps {
  children?: any;
  fontSize?: number;
  onClick?: any;
  sx?: any;
}

export const SquareIconButton: FC<SquareIconButtonProps> = (props) => {
  return (
    <Button
      color="secondary"
      variant="contained"
      onClick={props.onClick}
      sx={{
        p: "3px",
        fontSize: props.fontSize || 22,
        minWidth: "40px",
        width: "40px",
        aspectRatio: "1/1",
        color: "inherit",
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
};
