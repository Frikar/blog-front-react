import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
	return (
		<footer data-testid="Footer" className="footer footer-center p-10 bg-base-200 text-base-content rounded">
			<div className="grid grid-flow-col gap-4">
				<Link className="link link-hover" to="/">Inicio</Link>
				<a className="link link-hover" href="https://t.me/Frikar" target="_blank" rel="noreferrer">Contacto</a>
			</div>
			<div>
				<p>Copyright © 2022 - All right reserved by Diego Vásquez</p>
			</div>
		</footer>
	);
};

export default Footer;
