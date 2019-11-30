import * as React from "react";
import styled from "styled-components";
import { getListItemColor, Importances } from "../../helpers/getListItemColor";

export type Item = {
  importance: Importances;
  isDone: boolean;
  title: string;
  id: string;
};

export type ItemFromApi = Item & {
  isDone: string;
};

export type Props = {
  item: Item;
  onCheck(id: string): void;
  onUncheck(id: string): void;
};

const Title = styled.p`
  font-size: 25px;
  padding: 0;
  margin: 0;
  color: #393838;
`;

const Checkbox = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  background: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0), 0 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div<{ importance: Importances; isDone: boolean }>`
  background-color: ${props => getListItemColor(props.importance).background};
  border-left: 5px solid ${props => getListItemColor(props.importance).border};
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: 10px 0;
  padding: 15px;

  ${Title} {
    opacity: ${props => (props.isDone ? "0.6" : "1")};
  }

  ${Checkbox} {
    margin-right: 15px;
  }
`;

export const ListItem: React.FC<Props> = ({ item, onCheck, onUncheck }) => {
  const callback = React.useCallback(
    () => (item.isDone ? onCheck(item.id) : onUncheck(item.id)),
    [item.isDone]
  );

  const title = item.isDone ? "Uncheck" : "Check";

  return (
    <Wrapper importance={item.importance} isDone={item.isDone}>
      <Checkbox title={title} onClick={() => callback()}>
        {item.isDone && <i className="material-icons">check</i>}
      </Checkbox>
      <Title> {item.title} </Title>
    </Wrapper>
  );
};
