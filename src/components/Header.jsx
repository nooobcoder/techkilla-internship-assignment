import React, { Fragment } from "react";
import styles from "./styles/header.module.css";
import "../../src/index.css";

const Header = ({ title }) => {
	return (
		<Fragment>
			<p className={styles.container}>
				<img
					height="60px"
					src="https://cdn.iconscout.com/icon/free/png-512/apple-photos-493155.png"
					alt="app-logp"
				/>
				<div>{title}</div>
			</p>
		</Fragment>
	);
};

export default Header;
