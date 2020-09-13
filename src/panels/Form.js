import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {IOS, Panel, PanelHeader, PanelHeaderButton, platform} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

const Form = ({id, back, go}) => {
    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={back}>
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Форма
            </PanelHeader>
        </Panel>
    );
}

export default Form;
