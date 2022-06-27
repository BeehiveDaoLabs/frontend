import styled from "styled-components";
import findJobImage from "../../assets/backgrounds/find-great-work@1x.jpg";

export const BannerWrapper = styled.div`
	width: 100%;
	height: 600px;
	background: var(--white);
	user-select: none;

	.container {
		grid-template-columns: repeat(2, 1fr);
		width: 100%;
		max-width: var(--max-width);
		height: 100%;
		background: #1f57c3;
		color: var(--white);
		letter-spacing: var(--letter-spacing);

		.banner-image {
			width: 100%;
			background: url(${findJobImage}) no-repeat center/cover;
			min-height: 300px;
		}

		.desc {
			height: 100%;
			padding: 2em;
			margin: 3em;
			font-family: "Neue Montreal", "Helvetica Neue", Helvetica, Arial,
				"sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
				"Noto Color Emoji";
			position: relative;

			h1,
			h3,
			button {
				margin-bottom: 1em;
			}

			button {
				width: 150px;
				height: 50px;
				border: 1px solid var(--white);
				background: transparent;
				color: var(--white);
				letter-spacing: var(--letter-spacing);
				border-radius: 0.5em;
				margin-top: 2em;
				transition: var(--transition);
				font-weight: 700;

				&:hover {
					background: var(--white);
					color: var(--mainBlue);
				}
			}
		}
	}

	@media (max-width: 767px) {
		& {
			.container {
				grid-template-columns: 1fr;
			}
		}
	}
`;
