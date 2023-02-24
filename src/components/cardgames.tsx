import * as React from 'react'
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

export const CardGames = () => {
    const [tab, setTab] = useState(0)
    const handleTabSelect = (event: React.SyntheticEvent, newTab: number) => {
        setTab(newTab);
    };

    return <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs onChange={handleTabSelect} value={tab}>
            <Tab label="Solitare" />
            <Tab label="Hearts" />
        </Tabs>
    </Box>
}