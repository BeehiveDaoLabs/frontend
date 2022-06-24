import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle, BiWalletAlt, BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { NavbarWrapper } from "./style";
import Panel from "./Panel";
import logo from "../../assets/logo/opensea-pride.svg";

const _navListDefaults = (
	<>
		<li className="grid">
			<p>Explore</p>
		</li>
		<li className="grid">
			<p>Stats</p>
		</li>
		<li className="grid">
			<p>Resources</p>
		</li>
		<li className="grid">
			<p>Create</p>
		</li>
	</>
);

function Navbar() {
	const [navState, setNavState] = useState(false);

	const _toggleButton = navState ? (
		<AiOutlineClose
			className="icon toggle-btn"
			onClick={() => setNavState((state) => !state)}
		/>
	) : (
		<FaBars
			className="icon toggle-btn"
			onClick={() => setNavState((state) => !state)}
		/>
	);

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
			{/* large screens xl */}
			<ul className="grid nav-list nav-list-xl">
				{_navListDefaults}
				<li className="grid list-item">
					<BiUserCircle className="icon" />
				</li>
				<li className="grid list-item">
					<BiWalletAlt className="icon" />
				</li>
			</ul>

			{/* normal screens nl */}
			<ul className="grid nav-list nav-list-nl">
				<li className="grid list-item">
					<BiUserCircle className="icon" />
				</li>
				<li className="grid list-item">
					<BiWalletAlt className="icon" />
				</li>
				<li className="grid list-item">{_toggleButton}</li>
			</ul>

			{/* medium screens md */}
			<ul className="grid nav-list nav-list-md">
				<li className="grid list-item">{_toggleButton}</li>
			</ul>

			{/* small screens xs */}
			<ul className="grid nav-list nav-list-xs">
				<li className="grid">
					<BiSearch className="icon" />
				</li>
				<li className="grid">{_toggleButton}</li>
			</ul>
			{navState && <Panel />}
		</NavbarWrapper>
	);
}

export default Navbar;
