import * as React from 'react'
import { Box } from "@mui/material";
import { Route } from "react-router-dom";
import { AccountProfile } from "components/Account/profile";
import { AccountScores } from "components/Account/scores";
import { LoginOrRegister } from "components/Account/loginOrRegister";

export const AccountContainer = () => {
	const isLoggedIn = false
	return <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
		{isLoggedIn && <>
			<Route path="/account/profile" element={<AccountProfile />} />
            <Route path="/account/scores" element={<AccountScores />} />
		</>}
		{!isLoggedIn && <LoginOrRegister />}
	</Box>
}