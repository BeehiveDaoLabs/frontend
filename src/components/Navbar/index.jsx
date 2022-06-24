import React from "react";
import { NavbarWrapper } from "./style";
import logo from "../../assets/logo/opensea-pride.svg";

function Navbar() {
	return (
		<NavbarWrapper className="grid">
			<div className="grid logo">
				<img src={logo} alt="logo" />
				<h2>opensea</h2>
			</div>
			<form className="grid form-group">
				<input
					type="text"
					className="form-control"
					placeholder="Search items, collections, and accounts"
				/>
			</form>
		</NavbarWrapper>
	);
}

export default Navbar;
