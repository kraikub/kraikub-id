import { Grid } from "@mui/material";
import { ReactNode, FC, useState } from "react";
import { IOSSwitch } from "../../../layouts/ui/input/IosSwitch";

interface SwitchMenuProps {
  children?: ReactNode;
  settingKey: string;
  initialState: boolean;
  onChange: (newState: boolean, settingKey: string) => Promise<void>; 
  onError: () => void;
}


export const SwitchMenu: FC<SwitchMenuProps> = (props) => {
  const [localState, setLocalState] = useState(props.initialState)

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const old = !event.target.checked;
    setLocalState(event.target.checked);
    try {
      await props.onChange(event.target.checked, props.settingKey);
    } catch(error) {
      console.error(error)
      setLocalState(old);
    }
    
    
  }

  return (
    <Grid container>
      <Grid item xs={9}>
        {props.children}
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <IOSSwitch checked={localState} onChange={handleChange}/>
      </Grid>
    </Grid>
  );
};