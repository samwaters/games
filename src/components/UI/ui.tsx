import * as React from 'react'
import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom'
import { CardGames } from "components/UI/cardgames";

export const UI = () => {
    return <Container>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <Menu />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Games
                </Typography>
            </Toolbar>
        </AppBar>
        <Routes>
            <Route path="*" element={<CardGames />} />
        </Routes>
    </Container>
}