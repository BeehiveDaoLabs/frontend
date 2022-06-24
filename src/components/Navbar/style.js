import styled from "styled-components";

export const NavbarWrapper = styled.div`
	width: 100vw;
	height: 70px;
	background: red;
	grid-template-columns: repeat(12, 1fr);
	background: var(--off-white);
	padding: 0 0.5em;
	grid-gap: 0 0.5em;
	user-select: none;
	/* box-shadow: 5px 5px 5px var(--dark); */

	.logo {
		grid-column: 1/2;
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 0 0.5em;
		align-items: center;
		color: var(--dark);
		cursor: pointer;

		img {
			grid-column: 1/2;
			width: 40px;
			height: 40px;
		}
	}

	.form-group {
		grid-column: 2/7;
		height: auto;
		width: 100%;
		height: 100%;

		align-items: center;

		input {
			height: 50px;
			padding: 0 0.5em;
			border-radius: 0.5em;
			font-size: 0.85em;
			letter-spacing: var(--letter-spacing);
		}
	}

	.nav-list {
		display: none;
	}

	.nav-list-xl {
		display: grid;
	}

	.nav-list,
	.nav-list-xl {
		grid-column: 8/13;
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 0 1em;
		align-items: center;
		width: 100%;

		li {
			place-items: center;
			font-size: 1.1em;
			color: var(--dark);
			width: 100%;
			cursor: pointer;

			p {
				letter-spacing: var(--letter-spacing);
			}

			.icon {
				font-size: 1.75em;
			}
		}
	}

	@media (max-width: 1199px) {
		& {
			.nav-list-xl {
				display: none;
			}

			.form-group {
				grid-column: 2/10;
			}

			.nav-list-nl {
				display: grid;
				grid-column: 10/13;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 0 0.75em;
			}
		}

		@media (max-width: 767px) {
			& {
				.nav-list-nl {
					display: none;
				}

				.form-group {
					grid-column: 2/12;
				}

				.nav-list-md {
					display: grid;
					grid-column: 13/13;
					grid-template-columns: 1fr;
				}
			}

			@media (max-width: 424px) {
				& {
					.form-group,
					.nav-list-nl,
					.nav-list-md {
						display: none;
					}

					.nav-list-xs {
						display: grid;
						grid-column: 9/13;
						grid-template-columns: repeat(2, 1fr);

						li {
							.icon {
								font-size: 1.5em;
							}
						}
					}
				}

				@media (max-width: 370px) {
					& {
						.nav-list-xs {
							grid-column: 7/13;
						}
					}
				}
			}
		}
	}
`;
