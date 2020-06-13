import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import index from '../pages/Inicio';
import History from '../pages/History';




function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={index} />
				<Route exact path="/history" component={History} />
			</Switch>
		</BrowserRouter>
	)
}

export default App 