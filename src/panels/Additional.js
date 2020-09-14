import React, {useEffect, useState} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {PanelHeaderButton, Panel, PanelHeader, platform, IOS, Checkbox, FormLayout, Select, FormLayoutGroup} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {authors, getState} from "../state";

const osName = platform();

const Additional = ({id, go}) => {
    const [author, setAuthor] = useState(0);

    useEffect(() => {
        const state = getState();
        setAuthor(state.author);
    }, []);

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={() => window.history.back()}>
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Дополнительно
            </PanelHeader>
            <FormLayout>
                <Select
                    top="Автор"
                    onChange={(e) => {
                        setAuthor(Number.parseInt(e.currentTarget.value, 10));
                    }}
                    defaultValue={author.toString()}
                >
                    {authors.map((r, i) => <option value={i} key={i}>{r}</option>)}
                </Select>
                <FormLayoutGroup top="Сбор завершится">
                    <Checkbox>Когда соберём сумму</Checkbox>
                    <Checkbox>Когда наступит дата</Checkbox>
                </FormLayoutGroup>
            </FormLayout>
        </Panel>
    );
}

export default Additional;
