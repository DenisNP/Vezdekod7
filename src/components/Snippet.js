import React, {useState, useEffect} from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import {Card, CardGrid, Cell, Group, Separator, InfoRow, Progress, Div, Button} from "@vkontakte/vkui";
import "./Snippet.css";
import {authors} from "../state";

const Snippet = ({data, help}) => {
    const [doneText, setDoneText] = useState("");

    useEffect(() => {
        if (!data || Number.isNaN(data.amount) || !data.amount) {
            setDoneText("Сбор скоро начнётся");
        } else {
            setDoneText(`Собрано ${data.donated.toLocaleString("ru-RU")} ₽ из ${data.amount.toLocaleString("ru-RU")} ₽`);
        }
    });

    return (
        <CardGrid>
            <Card size="l" mode="outline">
                <div className="snippet-image" style={{backgroundImage: `url(${data.image})`}}/>
                <Group>
                    <Cell size="l" description={authors[data.author]}>{data.name}</Cell>
                    <Separator/>
                    <Div className="amount-block">
                        <InfoRow header={doneText} className="amount-info-row">
                            <Progress value={(!data || !data.amount || Number.isNaN(data.amount)) ? 0 : ((data.donated / data.amount) * 100)}/>
                        </InfoRow>
                        <Button
                            style={{marginLeft: 12, opacity: help ? 1.0 : 0.5}}
                            mode="outline"
                            onClick={help}>
                            Помочь
                        </Button>
                    </Div>
                </Group>
            </Card>
        </CardGrid>
    );
}

export default Snippet;
