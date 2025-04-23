import React from 'react';
import {Box} from "@mui/material";

const BoardBar = () => {
    return (
        <Box sx={{
            backgroundColor: 'primary.dark',
            width: '100%',
            height: (theme) => theme.customClass.boardBarHeight,
            display: 'flex',
            alignItems: 'center'
        }}>
            Boảd bar
        </Box>
    );
};

export default BoardBar;
