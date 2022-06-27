import React, { memo } from "react";
// import { BiUserCircle } from "react-icons/bi";
import { LoginWrapper } from "./style";
import Form from "../../components/Form";
// import logo from "../../assets/logo/opensea-pride.svg";

function Login() {
	return (
		<LoginWrapper className="grid">
			<div className="grid container">
				{/* <header className="grid">
					<div className="grid logo">
						<img src={logo} alt="logo" />
						<h2>Opensea.io</h2>
					</div>
				</header> */}
				<Form title="Login into your Beehive Dao account" isSignUp={false} />
			</div>
		</LoginWrapper>
	);
}

export default memo(Login);
