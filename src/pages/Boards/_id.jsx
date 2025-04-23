import React from 'react';
import {Box, Container} from "@mui/material";
import AppBar from "../../components/AppBar/index.jsx";
import BoardBar from "./BoardBar/index.jsx";
import BoardContent from "./BoardContent/index.jsx";

const Board = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
            <AppBar></AppBar>
            <BoardBar></BoardBar>
            <BoardContent></BoardContent>
        </Container>
    );
};

export default Board;
