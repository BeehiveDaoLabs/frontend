import React, { memo } from "react";
import { SignupWrapper } from "./style";
import Form from "../../components/Form";

function Signup() {
	return (
		<SignupWrapper className="grid">
			<div className="grid container">
				<Form
					title="Create your Beehive Dao account"
					// subtitle="Get Started For Free by Signing Up Now."
					isSignUp={true}
				/>
			</div>
		</SignupWrapper>
	);
}

export default memo(Signup);
