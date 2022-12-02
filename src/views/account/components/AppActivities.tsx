import { Box, Card, Grid, Typography } from "@mui/material";
import { ChoiceCard } from "../../../layouts/ui/menu/ChoiceCard";
import { GroupCardBase } from "./GroupCardBase";



export const AppActivities = () => {

  const choice = [
    {
      text: "Last 30 days sign in history",
    },
  ]

  return <ChoiceCard title="Account activities" description={
    <>
      
    </>
  } choice={choice}/>;
};
