import React, { Fragment, useState } from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import ImageUpload from "image-upload-react";
import "image-upload-react/dist/index.css";
import styles from "./styles/image.module.css";

import * as htmlToImage from "html-to-image";

const ImageContainer = ({ frameBorder }) => {
	const generateImage = (src, borderProps) => {
		const image = document.createElement("img");
		image.setAttribute("id", "finalImage");
		image.setAttribute("src", src);
		image.setAttribute("width", 700);
		image.setAttribute("height", 500);
		image.style.border = borderProps;

		document.getElementById("root").append(image);
		htmlToImage
			.toJpeg(document.getElementById("finalImage"), { quality: 1 })
			.then(function (src) {
				var link = document.createElement("a");
				link.download = "imageDownload.jpeg";
				link.href = src;
				link.click();
				document.getElementById("finalImage").remove();
			});
	};

	const [imageSrc, setImageSrc] = useState();

	const handleImageSelect = (e) => {
		setImageSrc(URL.createObjectURL(e.target.files[0]));
	};
	return (
		<Fragment>
			<div className={styles.imagecontainer} style={{ border: frameBorder }}>
				<ImageUpload
					handleImageSelect={handleImageSelect}
					imageSrc={imageSrc}
					setImageSrc={setImageSrc}
					style={{
						width: 600,
						height: 400,
						background: "#9b1fe8",
					}}
				/>
			</div>
			{frameBorder && (
				<Fragment>
					<button
						style={{
							marginLeft: "30%",
							marginRight: "30%",
							background: "rgb(155, 31, 232)",
							fontSize: "20px",
							color: "white",
							marginBottom: "10px",
							borderRadius: "10px",
						}}
						onClick={() => {
							generateImage(imageSrc, frameBorder);
						}}
					>
						Download
					</button>
					<FacebookShareButton
						url={
							"https://github.com/nooobcoder/techkilla-internship-assignment/"
						}
						quote={
							"Try this photobook app, this is awesome! Adds beatuful frames to your pictures with ease."
						}
					>
						<FacebookIcon size={52} round />
					</FacebookShareButton>
				</Fragment>
			)}
		</Fragment>
	);
};

export default ImageContainer;
