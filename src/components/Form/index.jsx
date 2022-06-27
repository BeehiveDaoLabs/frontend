import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Country from "./Country";
import { FormWrapper } from "./style";

function Form({ title, subtitle, isSignUp }) {
	const [country, setCountry] = useState("none");
	const [countryModal, setCountryModal] = useState(false);

	return (
		<FormWrapper className="grid">
			<div className="grid header">
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</div>
			<div className="grid form-control">
				<label htmlFor="username">Username</label>
				<div className="form-input">
					<input type="text" placeholder="Enter username" id="username" />
				</div>
			</div>
			<div className="grid form-control">
				<label htmlFor="password">Password</label>
				<div className="grid form-input">
					<input type="password" placeholder="Enter password" id="password" />
				</div>
			</div>

			{isSignUp && (
				<div className="grid form-control">
					<label htmlFor="confirm-password">Confirm Password</label>
					<div className="grid form-input">
						<input
							type="password"
							placeholder="Reenter password"
							id="confirm-password"
						/>
					</div>
				</div>
			)}

			{isSignUp && (
				<div className="grid form-control">
					<label htmlFor="residence">Country of Residence</label>

					<div className="grid form-input">
						<div
							className="grid country-list"
							onClick={() => setCountryModal((state) => !state)}
						>
							<p>{country}</p>
							<IoIosArrowDown className="icon" />
							{countryModal && <Country setCountry={setCountry} />}
						</div>
					</div>
				</div>
			)}

			<div className="grid form-control">
				<button type="submit" className="btn">
					{isSignUp ? "Continue" : "Login"}
				</button>
			</div>
		</FormWrapper>
	);
}

export default Form;
