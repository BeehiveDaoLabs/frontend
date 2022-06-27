import styled from "styled-components";

export const CountryWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	place-items: center;

	.country-container {
		width: 400px;
		max-height: 300px;
		overflow-y: scroll;
		align-items: center;
		grid-gap: 0.25em 0;
		background: var(--white);
		border: 1.5px solid var(--off-white);
		border-radius: 0.5em;

		header {
			width: 100%;
			padding: 0.25em 1em;
			font-weight: 800;
			letter-spacing: 1.5px;
			user-select: none;
		}

		&::-webkit-scrollbar {
			width: 0.4vw;
		}

		&::-webkit-scrollbar-thumb {
			background: #212121;
			border-radius: 2em;
		}

		&::-webkit-scrollbar-track {
			background: #dcdfe1;
		}

		.country-name {
			cursor: pointer;
			padding: 0.25em 1em;
			user-select: none;
			letter-spacing: 1px;

			&:hover {
				background: var(--off-white);
			}
		}
	}

	@media (max-width: 767px) {
		& {
			.country-container {
				width: 350px;
			}
		}

		@media (max-width: 500px) {
			& {
				.country-container {
					width: 300px;
				}
			}
		}
	}
`;
