import * as React from 'react'
import { Google as GoogleIcon } from "@mui/icons-material"
import { Box, Button, Container, Divider, FormControl, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const Login = () => {
	const validateEmail = (email: string) => {
		return !emailDirty || /foo@bar.com/.test(email)
			? { message: "", valid: true }
			: { message: "Invalid e-mail address", valid: false }
	}
	const validatePassword = (password: string) => {
		return !passwordDirty || password.length > 0
			? { message: "", valid: true }
			: { message: "Invalid password", valid: false }
	}

	const [email, setEmail] = useState("")
	const [emailDirty, setEmailDirty] = useState(false)
	const [password, setPassword] = useState("")
	const [passwordDirty, setPasswordDirty] = useState(false)
	const emailValidator = validateEmail(email)
	const passwordValidator = validatePassword(password)

	return <Box>
		<Container maxWidth="sm">
			<Typography gutterBottom variant="h6">Log In with your Google Account</Typography>
			<Box sx={{ display: "flex", justifyContent: "center"}}>
				<Button
					startIcon={<GoogleIcon />}
					sx={{ marginBottom: "8px" }}
					variant="contained"
				>Log In with Google</Button>
			</Box>
		</Container>
		<Container maxWidth="md">
			<Divider />
		</Container>
		<Container maxWidth="sm">
			<Typography gutterBottom variant="h6">Log In with your E-Mail Address</Typography>
			<FormControl fullWidth>
				<TextField
					error={!emailValidator.valid}
					fullWidth
					helperText={emailValidator.message}
					label="E-mail Address"
					margin="dense"
					onBlur={() => setEmailDirty(true)}
					onChange={(e) => { setEmailDirty(true); setEmail(e.target.value)} }
					required
					value={email}
					variant="filled"
				/>
				<TextField
					error={!passwordValidator.valid}
					fullWidth
					helperText={passwordValidator.message}
					label="Password"
					margin="dense"
					onBlur={() => setPasswordDirty(true)}
					onChange={(e) => { setPasswordDirty(true); setPassword(e.target.value)} }
					required type="password"
					value={password}
					variant="filled"
				/>
				<Stack direction="row" mb={2} ml="auto" mr="auto" mt={2} spacing={2}>
					<Button variant="contained">Log In</Button>
					<Button variant="outlined">Forgot Password?</Button>
				</Stack>
			</FormControl>
		</Container>
	</Box>
}