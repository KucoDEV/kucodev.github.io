import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import NavbarBottom from './Components/NavbarBottom';
import TogleTheme from './Components/TogleTheme';
import NavigationLg from './Components/NavigationLg';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {
	const [toggleDark, settoggleDark] = useState(true);

	const myTheme = createTheme({
		palette: {
			mode: toggleDark ? 'dark' : 'light',
			primary: { main: '#d2b76f' },
			text: { disabled: '#d2b76f' },
		},
		components: {
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundImage: 'none',
						backgroundColor: 'rgb(21 21 21 / 75%)',
						backdropFilter: 'blur(10px)',
						boxShadow: '0 4px 8px 0 rgb(210 183 111 / 42%)',
						background: toggleDark ? 'rgb(21 21 21 / 75%)' : 'rgba(255, 255, 255, 0.08)',
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<TogleTheme toggleDark={toggleDark} settoggleDark={settoggleDark} />
			<NavigationLg />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/portfolio' element={<Portfolio />} />
			</Routes>

			<NavbarBottom />
		</ThemeProvider>
	);
}

export default App;
