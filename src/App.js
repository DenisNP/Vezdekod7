import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Start from "./panels/Start";
import SelectType from "./panels/SelectType";
import "./App.css";
import Form from "./panels/Form";
import Additional from "./panels/Additional";

const App = () => {
	const [activePanel, setActivePanel] = useState("start");

	const changePanel = (p) => {
		setActivePanel(p);
		window.history.pushState({panel: p}, "");
	};

	useEffect(() => {
		window.history.pushState({panel: "start"}, "");
		window.onpopstate = function(e) {
			setActivePanel((e.state && e.state.panel) || "start")
		};
	}, []);

	return (
		<View activePanel={activePanel}>
			<Start id="start" go={changePanel}/>
			<SelectType id="selectType" go={changePanel}/>
			<Form id="form" go={changePanel}/>
			<Additional id="additional" go={changePanel}/>
		</View>
	);
}

export default App;

