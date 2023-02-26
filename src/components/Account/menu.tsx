import * as React from 'react'
import {Divider, Menu, MenuItem} from "@mui/material";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface AccountMenuProps {
    anchor: HTMLElement | null
    onClose: () => void
    open: boolean
}

const handleNavigate = (path: string, navigate: NavigateFunction, close: () => void) => {
    close()
    navigate(path)
}

const MenuLoggedIn = ({ close }: {close: () => void}) => {
    const navigate = useNavigate()
    return <>
        <MenuItem onClick={() => handleNavigate("/account/profile", navigate, close)}>Profile</MenuItem>
        <MenuItem onClick={() => handleNavigate("/account/scores", navigate, close)}>Scores</MenuItem>
        <Divider />
        <MenuItem>Log Out</MenuItem>
    </>
}
const MenuLoggedOut = ({ close }: {close: () => void}) => {
    const navigate = useNavigate()
    return <>
        <MenuItem onClick={() => handleNavigate("/account", navigate, close)}>Log In / Register</MenuItem>
    </>
}
export const AccountMenu = ({ anchor, onClose, open }: AccountMenuProps) => {
    return <Menu anchorEl={anchor} onClose={onClose} open={open}>
        <MenuLoggedOut close={onClose} />
    </Menu>
}