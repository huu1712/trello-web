import React from 'react';
import {Box} from "@mui/material";
import ModeSelect from "../ModeSelect/index.jsx";

const AppBar = () => {
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            width: '100%',
            height: (theme) => theme.customClass.appBarHeight,
            display: 'flex',
            alignItems: 'center'
        }}>
            <ModeSelect/>
        </Box>
    );
};

export default AppBar;
