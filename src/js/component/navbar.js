import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<span >
				<img style={{masWidth: '50px', maxHeight: '50px'}} src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" />
			</span>
			<div className="btn-group ">
				<button type="button" className=" btn btn-primary dropdown-toggle" data-toggle="dropdown">
					Action
				</button>
				<div className="dropdown-menu">
					<span className="dropdown-item" value="action">Action</span>
					<span className="dropdown-item">Another action</span>
				
					<div className="dropdown-divider"></div>
					<span className="dropdown-item" >Separated link</span>
  				</div>
			</div>

			
		</nav>
	);
};
