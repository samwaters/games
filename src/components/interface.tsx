import * as React from 'react'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';
import {Route, Routes, useNavigate} from 'react-router-dom'
import { CardGames } from "components/cardgames";
import {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {logAction} from "store/logger.store";
import {AccountMenu} from "components/Account/menu";
import {PuzzleGames} from "components/puzzlegames";

export const Interface = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null)
    const menuOpen = Boolean(menuAnchorEl)

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setMenuAnchorEl(null)
    }

    useEffect(() => {
        dispatch(logAction("ui_loaded"))
    }, [])

    return <Container>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    aria-label="menu"
                    color="inherit"
                    edge="start"
                    onClick={handleMenuOpen}
                    size="medium"
                    sx={{ display: {xs: 'flex', md: 'none'}, ml: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    Games
                </Typography>
                <Box
                    flexGrow={1}
                    sx={{ display: {xs: 'none', md: 'flex'}}}
                >
                    <Button
                        onClick={() => navigate("/card")}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >Card Games</Button>
                    <Button
                        onClick={() => navigate("/puzzle")}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >Puzzle Games</Button>
                </Box>
                <Tooltip title="Profile">
                    <IconButton
                        onClick={handleMenuOpen}
                        size="small"
                        sx={{ ml: 2 }}
                    >
                        <Avatar />
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <AccountMenu anchor={menuAnchorEl} onClose={handleMenuClose} open={menuOpen} />
        </AppBar>
        <Routes>
            <Route path="/card" element={<CardGames />} />
            <Route path="/puzzle" element={<PuzzleGames />} />
            <Route path="*" element={<CardGames />} />
        </Routes>
    </Container>
}