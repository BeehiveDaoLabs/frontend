import React from "react";
import Banner from "../../components/Banner";
import { HomeWrapper } from "./style";

function Home() {
	return (
		<HomeWrapper className="grid">
			<Banner />
		</HomeWrapper>
	);
}

export default Home;
