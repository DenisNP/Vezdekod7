import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Button, IOS, Panel, PanelHeader, Placeholder, platform} from "@vkontakte/vkui";
import {getState} from "../state";

const osName = platform();

const Start = ({id, go}) => {

    const goNext = () => {
        getState(true);
        go("selectType");
    };

    return (
        <Panel id={id}>
            <PanelHeader>Пожертвования</PanelHeader>
            <Placeholder stretched action={<Button onClick={goNext}>Создать сбор</Button>}>
                У вас пока нет сборов.<br/>Начните доброе дело.
            </Placeholder>
        </Panel>
    );
}

export default Start;
