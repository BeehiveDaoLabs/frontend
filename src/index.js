import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./Context/app";
import { Web3Provider } from "./Context/web3";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Router>
			<AppProvider>
				<Web3Provider>
					<App />
				</Web3Provider>
			</AppProvider>
		</Router>
	</React.StrictMode>
);
reportWebVitals();
