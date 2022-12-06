import { Box, Divider, Paper, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { MuiPaperSx } from "../../../styles/mui/custom-mui-sx";

interface MultiSectionProps {
  children: ReactNode | ReactNode[];
}

export const MultiSection: FC<MultiSectionProps> = (props) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        borderStyle: "solid",
        borderColor: theme.palette.divider,
        ...MuiPaperSx.disableBorderXOnMobile,
        ...MuiPaperSx.disableBorderRadiusOnMobile,
        p: 0,
      }}
    >
      {Array.isArray(props.children) ? (
        props.children.map((node, index) => {
          return (
            <Box key={`multi-section-node-${index}`}>
              <Box
                sx={{
                  padding: "18px",
                }}
              >
                {node}
              </Box>
              {index === (props.children as ReactNode[]).length - 1 ? null : (
                <Divider />
              )}
            </Box>
          );
        })
      ) : (
        <Box
          sx={{
            padding: "18px",
          }}
        >
          {props.children}
        </Box>
      )}
    </Paper>
  );
};
