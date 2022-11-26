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
      <KeyValueField title="Joined year" value={`B.E. ${2500+62}`} />
      <KeyValueField title="Phone" value="0924373999" />
    </GroupCardBase>
  );
};
