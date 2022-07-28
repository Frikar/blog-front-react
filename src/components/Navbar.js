import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar bg-base-100" role="navigation" aria-label="Navbar">
			<div className="flex-1">
				<Link className="btn btn-ghost normal-case text-3xl" to="/">Wortise Blog</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0 text-xl">
					<li><Link to="/">Home</Link></li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
