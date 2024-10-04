import React, { useContext} from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store} = useContext(Context);
	const count = store.favorites.length
	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<span >
				<img style={{masWidth: '50px', maxHeight: '50px'}} src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" />
			</span>
			<div className="btn-group ">
				<div type="button" className=" btn btn-primary dropdown-toggle" data-toggle="dropdown">
					Action
					<span className="bg-light mx-1 px-1 text-dark rounded">{count}</span>
				</div>
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
