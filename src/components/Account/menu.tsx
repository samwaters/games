import * as React from 'react'
import {Divider, Menu, MenuItem} from "@mui/material";

interface AccountMenuProps {
    anchor: HTMLElement | null
    onClose: () => void
    open: boolean
}
export const AccountMenu = ({ anchor, onClose, open }: AccountMenuProps) => {
    return <Menu anchorEl={anchor} onClose={onClose} open={open}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Scores</MenuItem>
        <Divider />
        <MenuItem>Log Out</MenuItem>
    </Menu>
}