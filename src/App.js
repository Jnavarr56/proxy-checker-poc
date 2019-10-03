import React from 'react'
import {
 BrowserRouter 
} from 'react-router-dom'
import {
 renderRoutes 
} from 'react-router-config'
import routes from './routes'
import {
 ThemeProvider 
} from '@material-ui/styles'
import {
 createMuiTheme 
} from '@material-ui/core'

function App() {
	// console.log(process.env.REACT_APP_COMPANY_AUTOCOMPLETE_API_KEY)
	//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
	return (
		<ThemeProvider theme={ createMuiTheme() }>
			<BrowserRouter>{renderRoutes( routes )}</BrowserRouter>
		</ThemeProvider>
	)
}

export default App
