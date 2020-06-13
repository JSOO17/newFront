import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = (props) => (


		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<ul className="navbar-nav mr-auto">
				<li className="nav-item active">
					<Link className="nav-link" to="/history" >History</Link>
				</li>
			</ul>
				<form onSubmit={props.onSubmit} className="form-inline my-2 my-lg-0">
	      			<input className="form-control mr-sm-2"
	      			type="search"
	      			placeholder="search"
	      			name="search"
	      			onChange={props.onChange}
	      			/>
	      			<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">search</button>
	    		</form>
			</nav>
)

export default Navigation