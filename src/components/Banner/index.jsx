import React, { memo } from "react";
import reactDom from "react-dom";
import { BannerWrapper } from "./style";

function Banner() {
	return reactDom.createPortal(
		<BannerWrapper className="grid">
			<div className="grid container">
				<div className="grid banner-image" />
				<div className="desc">
					<h3>For talent</h3>
					<h1>Find great work</h1>
					<p>
						Meet clients you’re excited to work with and take your career or
						business to new heights.
					</p>
					<button type="button">Explore</button>

					{/* <div className="grid lower">
						<div className="line-through" />
					</div> */}
				</div>
			</div>
		</BannerWrapper>,
		document.getElementById("homepage-banner")
	);
}

export default memo(Banner);
