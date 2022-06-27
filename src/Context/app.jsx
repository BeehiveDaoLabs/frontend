import { createContext, Component } from "react";
import countries from "../assets/data/countries.json";
const appContext = createContext();

class AppProvider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			countries: [],
		};
	}

	async componentDidMount() {
		const countries = this._getAllCountries();
		this.setState({ countries });
	}

	_getAllCountries = () => {
		const allCountries = countries.map((country) =>
			country.name.common.toString()
		);
		const sortedCountries = allCountries.sort((a, b) => a - b);
		return sortedCountries;
	};

	render() {
		return (
			<appContext.Provider
				value={{
					...this.state,
				}}
			>
				{this.props.children}
			</appContext.Provider>
		);
	}
}

export { appContext, AppProvider };
