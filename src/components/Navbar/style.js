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
		background: orange;
		grid-gap: 0 0.5em;
		align-items: center;
		color: var(--dark);

		img {
			width: 40px;
			height: 40px;
		}
	}
`;
