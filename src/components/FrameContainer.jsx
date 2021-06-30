import React from "react";
import FrameItem from "../FrameItem";
import styles from "./styles/frame.module.css";

const FrameContainer = ({ setFrameBorder }) => {
	const borders = [
		{ id: 1, border: "3px solid blue" },
		{ id: 2, border: "5px solid orange" },
		{ id: 3, border: "10px solid violet" },
		{ id: 4, border: "13px solid red" },
		{ id: 5, border: "20px solid #44C899" },
		{ id: 5, border: "20px solid #44C409" },
		{ id: 6, border: "3px solid #441b99" },
	];

	return (
		<div className={styles.scrollmenu}>
			<ul className={styles.framecontainer}>
				{borders.map(({ id, border }) => {
					return (
						<li
							className={styles.li}
							onClick={() => setFrameBorder(border)}
							key={id}
						>
							<FrameItem border={border} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default FrameContainer;
