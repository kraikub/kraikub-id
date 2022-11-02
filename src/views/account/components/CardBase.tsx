import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

interface CardBaseProps {
  backgroundElement?: ReactNode;
  backgroundColor?: string;
  children?: any
  href?: string;
}

export const CardBase: FC<CardBaseProps> = ({
  backgroundElement,
  backgroundColor,
  children,
  href, 
}) => {
  const router = useRouter()
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "200px",
        borderRadius: "20px",
        backgroundColor: backgroundColor || "#ffffff0e",
        cursor: href ? "pointer": "",
      }}
      onClick={() => {
        if (href) {
          return router.push(href);
        }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 12,
        }}
      >
        {backgroundElement}
      </Box>
      <Box
        sx={{
          position: "relative",
          zIndex: 13,
          padding: "20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
