import React, { memo, useContext } from "react";
import reactDom from "react-dom";
import { appContext } from "../../../Context/app";
import { CountryWrapper } from "./style";

function Country({ setCountry }) {
	const { countries: countriesList } = useContext(appContext);

	const countriesOptions = countriesList.map((country, index) => {
		return (
			<div
				key={index}
				className="country-name"
				onClick={() => setCountry(country)}
			>
				{country}
			</div>
		);
	});

	return reactDom.createPortal(
		<CountryWrapper className="grid">
			<div className="grid country-container">
				<header>Select country:</header>
				{countriesOptions}
			</div>
		</CountryWrapper>,
		document.getElementById("country-lists-modal")
	);
}

export default memo(Country);
