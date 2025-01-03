import { light } from '@/scss/MaterialTheme'
import { CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AppProps } from 'next/app'
import { useState } from 'react'
import '../scss/app.scss'

export default function App({ Component, pageProps }: AppProps) {
	//@ts-ignore
	const [theme, setTheme] = useState(createTheme(light))
	//Socket.io
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
