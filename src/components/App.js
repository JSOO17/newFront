import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import index from '../pages/Inicio';



function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={index} />
			</Switch>
		</BrowserRouter>
	)
}

export default App 