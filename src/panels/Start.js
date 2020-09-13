import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Button, IOS, Panel, PanelHeader, Placeholder, platform} from "@vkontakte/vkui";

const osName = platform();

const Start = ({id, go}) => {
    return (
        <Panel id={id}>
            <PanelHeader>Пожертвования</PanelHeader>
            <div className={osName === IOS ? "center-vertical-ios" : "center-vertical-android"}>
                <Placeholder action={<Button onClick={go}>Создать сбор</Button>}>
                    У вас пока нет сборов.<br/>Начните доброе дело.
                </Placeholder>
            </div>
        </Panel>
    );
}

export default Start;
