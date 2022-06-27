import styled from "styled-components";

export const FormWrapper = styled.div`
	width: 100%;
	background: var(--off-white);
	padding: 2em;
	border-radius: 0.5em;

	.header {
		place-items: center;
		width: 100%;
		margin: 0 0 1em;
		line-height: 1.5;
		letter-spacing: var(--letter-spacing);
	}

	.form-control {
		margin: 0 0 1.5em;
		width: 100%;
		grid-gap: 0.25em 0;
		user-select: none;

		label {
			letter-spacing: var(--letter-spacing);
			text-transform: capitalize;
			font: 500 0.85em;
		}

		.form-input {
			width: 100%;
			height: 40px;
			position: relative;

			* {
				padding: 0.5em 0.75em;
				border-radius: 0.5em;
				height: 45px;
			}

			input {
				width: 100%;
				font-size: 0.8em;
				letter-spacing: var(--letter-spacing);
			}

			select {
				outline: none;
				border: none;
				border-radius: 0.5em;
			}

			.country-list {
				grid-template-columns: 10fr 1fr;
				background: var(--white);
				width: 100%;
				align-items: center;
				padding: 0;
				letter-spacing: var(--letter-spacing);
				cursor: pointer;

				.icon {
					width: 100%;
					font-size: 1.2em;
				}
			}
		}

		.btn {
			width: 100%;
			height: 45px;
			background: var(--mainBlue);
			color: var(--white);
			opacity: 0.8;
			letter-spacing: var(--letter-spacing);
			border-radius: 0.5em;
		}
	}
`;
