import * as React from 'react';
import styled from 'styled-components';
import { getListItemColor, Importances } from '../../helpers/getListItemColor';

interface Item {
    importance: Importances;
    isDone: boolean;
    title: string;
    id: string; 
}

type Props = {
    item: Item;
    onCheck(id: string): void;
    onUncheck(id: string): void;
}

const Wrapper = styled.div<{ importance: Importances; }>`
    background-color: ${props => getListItemColor(props.importance)};
`;

export const ListItem: React.FC<Props> = ({
    item,
    onCheck,
    onUncheck
}) => {
    const callback = React.useCallback(
      () => (item.isDone ? onCheck(item.id) : onUncheck(item.id)),
      [item.isDone]
    );

    return (
        <Wrapper onClick={callback} importance={item.importance}>
            {item.title}
        </Wrapper>
    )
}