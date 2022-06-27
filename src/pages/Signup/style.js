import styled from "styled-components";

export const SignupWrapper = styled.div`
	width: 100%;
	height: calc(100vh - var(--nav-height));
	/* align-items: center; */
	margin-top: var(--nav-height);
	font-family: "Times New Roman";

	.container {
		width: 50%;
		height: 300px;
		margin: 5em auto 0;

		header {
			width: auto;
			place-items: center;
			margin: 0 auto 0.5em;
			background: transparent;

			.logo {
				grid-template-columns: 1fr 3fr;
				grid-gap: 0 0.75em;
				align-items: center;
				color: var(--dark);
				cursor: pointer;

				img {
					/* grid-column: 1/2; */
					width: 40px;
					height: 40px;
				}
			}
		}
	}

	@media (max-width: 767px) {
		& {
			.container {
				width: 70%;
			}
		}

		@media (max-width: 500px) {
			& {
				.container {
					width: 95%;
				}
			}
		}
	}
`;
