import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import FrameContainer from "./components/FrameContainer";

function App() {
	const [frameBorder, setFrameBorder] = useState(null);
	return (
		<div className="App">
			<Header title={"Photobooth"} />
			<ImageContainer
				frameBorder={frameBorder}
				setFrameBorder={setFrameBorder}
			/>
			<FrameContainer setFrameBorder={setFrameBorder} />
		</div>
	);
}

export default App;
