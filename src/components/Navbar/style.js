import styled from "styled-components";

export const NavbarWrapper = styled.div`
	width: 100vw;
	height: 70px;
	background: red;
	grid-template-columns: repeat(12, 1fr);
	background: var(--off-white);
	/* box-shadow: 5px 5px 5px var(--dark); */

	.logo {
		grid-column: 1/2;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 0 0.5em;
		align-items: center;
		color: var(--dark);

		img {
			width: 40px;
			height: 40px;
		}
	}

	.form-group {
		grid-column: 4/8;
		height: auto;
		width: 100%;
		height: 100%;

		align-items: center;

		input {
			height: 50px;
			padding: 0 0.5em;
			border-radius: 0.5em;
		}
	}
`;
