import React from 'react';
import {Box} from "@mui/material";

const BoardContent = () => {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: (theme) => `calc(100vh - ${theme.customClass.appBarHeight} - ${theme.customClass.boardBarHeight})`
        }}>
            content
        </Box>
    );
};

export default BoardContent;
