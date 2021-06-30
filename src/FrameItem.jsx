import React from "react";

const FrameItem = ({ border }) => {
	return (
		<div
			style={{
				height: "100px",
				width: "200px",
				border,
				cursor: "pointer",
				marginRight: "20px",
			}}
		></div>
	);
};

export default FrameItem;
