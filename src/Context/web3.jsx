import { createContext, Component } from "react";
import { ethers } from "ethers";
const web3Context = createContext();

class Web3Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			web3: null,
			user: null,
			provider: null,
		};
	}

	async componentDidMount() {
		this.setState({
			loading: true,
		});

		await this.connectDapp();
	}

	connectDapp = async () => {
		try {
			await this.connectWeb3Modal();
		} catch (error) {
			return error;
		}
	};

	connectWeb3Modal = async () => {
		try {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const user = await provider.send("eth_requestAccounts", []);
			this.setState({
				loading: false,
				user,
				provider,
			});
		} catch (error) {
			console.log(error);
			return error;
		}
	};

	// load blockchain data
	loadBlockchainData = async ({ loading } = this.state) => {
		if (loading) return;
		try {
		} catch (error) {
			return error;
		}
	};

	// HELPERS FUNCTIONS
	// fromWei = (_amount, { web3 } = this.state) =>
	// 	web3.utils.fromWei(_amount, "ether");

	// toWei = (_amount, { web3 } = this.state) =>
	// 	web3.utils.toWei(_amount, "ether");

	// toChecksumAddress = (_account, { web3 } = this.state) =>
	// 	web3.utils.toChecksumAddress(_account);

	reRender = async () => await this.loadBlockchainData();

	updateAccount = async (_newAddress) => {
		this.setState({ user: this.toChecksumAddress(_newAddress) });
		await this.reRender();
	};

	render() {
		return (
			<web3Context.Provider
				value={{
					...this.state,
					connectDapp: this.connectDapp,
					reRender: this.reRender,
					updateAccount: this.updateAccount,
					addAmdToMetamask: this.addAmdToMetamask,

					fromWei: this.fromWei,
					toWei: this.toWei,
				}}
			>
				{this.props.children}
			</web3Context.Provider>
		);
	}
}

export { web3Context, Web3Provider };
