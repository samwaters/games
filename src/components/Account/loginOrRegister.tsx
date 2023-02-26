import * as React from 'react'
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Login } from "components/Account/login";
import { Register } from "components/Account/register";

export const LoginOrRegister = () => {
	const [tab, setTab] = useState(0)
	const handleTabSelect = (event: React.SyntheticEvent, newTab: number) => {
		setTab(newTab);
	};

	return <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
		<Tabs onChange={handleTabSelect} value={tab}>
			<Tab label="Log In" />
			<Tab label="Register" />
		</Tabs>
		{tab === 0 && <Login />}
		{tab === 1 && <Register />}
	</Box>
}