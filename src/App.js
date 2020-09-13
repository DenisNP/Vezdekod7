import React, { useState } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';
import Start from "./panels/Start";
import SelectType from "./panels/SelectType";
import "./App.css";
import Form from "./panels/Form";

const App = () => {
	const [activePanel, setActivePanel] = useState("start");

	const openSelectType = () => {
		setActivePanel("selectType")
	};

	const openStart = () => {
		setActivePanel("start")
	};

	const openForm = () => {
		setActivePanel("form")
	};

	return (
		<View activePanel={activePanel}>
			<Start id="start" go={openSelectType}/>
			<SelectType id="selectType" back={openStart} go={openForm}/>
			<Form id="form" back={openSelectType}/>
		</View>
	);
}

export default App;

