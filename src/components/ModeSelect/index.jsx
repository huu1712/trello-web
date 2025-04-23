import React from 'react';
import {useColorScheme} from "@mui/material/styles";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode.js";
import DarkModeIcon from "@mui/icons-material/DarkMode.js";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness.js";

function ModeSelect() {
    const {mode, setMode} = useColorScheme();
    const handleChange = (event) => {
        const selectedMode = event.target.value;
        setMode(selectedMode);
    };

    return (
        <FormControl sx={{m: 1, minWidth: 120}} size="small">
            <InputLabel id="label-select-mode">Mode</InputLabel>
            <Select
                labelId="label-select-mode"
                id="select-mode"
                value={mode}
                label="Mode"
                onChange={handleChange}
            >
                <MenuItem value="light">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <LightModeIcon/> Light
                    </Box>

                </MenuItem>
                <MenuItem value="dark">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <DarkModeIcon/> Dark
                    </Box>
                </MenuItem>
                <MenuItem value="system">
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <SettingsBrightnessIcon/> System
                    </Box>
                </MenuItem>
            </Select>
        </FormControl>
    );
}


export default ModeSelect;
