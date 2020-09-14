import React, { useState, useEffect } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import Start from "./panels/Start";
import SelectType from "./panels/SelectType";
import "./App.css";
import Form from "./panels/Form";
import Additional from "./panels/Additional";
import Post from "./panels/Post";
import Wall from "./panels/Wall";

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

		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
	}, []);

	return (
		<View activePanel={activePanel}>
			<Start id="start" go={changePanel}/>
			<SelectType id="selectType" go={changePanel}/>
			<Form id="form" go={changePanel}/>
			<Additional id="additional" go={changePanel}/>
			<Post id="post" go={changePanel}/>
			<Wall id="wall" go={changePanel}/>
		</View>
	);
}

export default App;

