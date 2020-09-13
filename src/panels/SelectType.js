import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {PanelHeaderButton, Panel, PanelHeader, platform, IOS, Banner} from "@vkontakte/vkui";
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28TargetOutline from '@vkontakte/icons/dist/28/target_outline';
import Icon28CalendarOutline from '@vkontakte/icons/dist/28/calendar_outline';
import {setState} from "../state";

const osName = platform();

const SelectType = ({id, back, go}) => {
    const goNonRegular = () => {
        setState({isRegular: false});
        go();
    };
    
    const goRegular = () => {
        setState({isRegular: true});
        go();
    };

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={back}>
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Тип сбора
            </PanelHeader>
            <div className={osName === IOS ? "center-vertical-ios" : "center-vertical-android"}>
                <Banner
                    before={<Icon28TargetOutline className="accent-color"/>}
                    header="Целевой сбор"
                    subheader="Когда есть определённая цель"
                    asideMode="expand"
                    onClick={goNonRegular}
                />
                <Banner
                    before={<Icon28CalendarOutline className="accent-color"/>}
                    header="Регулярный сбор"
                    subheader="Если помощь нужна ежемесячно"
                    asideMode="expand"
                    onClick={goRegular}
                />
            </div>
        </Panel>
    );
}

export default SelectType;
