import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";
import { BiBook } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GroupCardBase } from "./GroupCardBase";
import { KeyValueField } from "./KeyValueField";
import { OutlineBadge } from "./OutlineBadge";
import { UseSuggestionEmail } from "./UseSuggestionEmail";

export const General = () => {
  const theme = useTheme();
  return (
    <GroupCardBase title="About you">
      {/* <Grid container spacing={1}>
        <Grid item xs={12} sm={6} lg={4}>
          <OutlineBadge
            textEn="Current student"
            textTh="นิสิตปัจจุบัน"
            icon={<BiBook />}
            iconSize="24px"
            // color={theme.palette.success.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <OutlineBadge
            textEn="University Email not verified"
            textTh="ยังไม่ยืนยันอีเมลมหาวิทยาลัย"
            icon={<MdOutlineMailOutline />}
            iconSize="24px"
            // color={theme.palette.error.main}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <OutlineBadge
            textEn="Secondary Email not verified"
            textTh="ยังไม่ยืนยันอีเมลสำรอง"
            icon={<BiBook />}
            iconSize="24px"
            // color={theme.palette.error.main}
          />
        </Grid>
      </Grid> */}
      <KeyValueField title="Joined year" value={62} />
      <KeyValueField title="Phone" value="0924373999" />
    </GroupCardBase>
  );
};
