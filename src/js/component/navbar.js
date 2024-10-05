import React, { useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const count = store.favorites.length

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/" >
				<img style={{masWidth: '50px', maxHeight: '50px'}} src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png" />
			</Link>
			<div className="btn-group">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="bg-light mx-1 px-1 text-dark rounded">{count}</span>
				</button>
				<ul className="dropdown-menu">
					{store.favorites.map((item, index)=>{
						return (<li key={index} className="d-flex justify-content-around"><Link  to={"/"+item.type+"details/" + item.id} state={item} ><button className="dropdown-item">{item.name}</button></Link>
								<span onClick={()=>{actions.deleteFavorites(item)}} ><i className="fa-solid fa-trash"></i></span></li>)
					})}
					
					
				</ul>
			</div>

			
		</nav>
	);
};
