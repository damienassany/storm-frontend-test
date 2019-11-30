import * as React from "react";
import styled from "styled-components";
import { getListItemColor, Importances } from "../../helpers/getListItemColor";

export type Item = {
  importance: Importances;
  isDone: boolean;
  title: string;
  id: string;
};

export type ItemFromApi = Omit<Item, "isDone"> & {
  isDone: string;
};

export type Props = {
  item: Item;
  update(id: string, data: Partial<ItemFromApi>): void;
  deleteTask(id: string): void;
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

const DeleteButton = styled.button`
  align-self: flex-end;
  position: absolute;
  right: 30px;
`;

export const ListItem: React.FC<Props> = ({ item, update, deleteTask }) => {
  const onClick = React.useCallback(() => {
    const data = {
      isDone: Boolean(!item.isDone).toString()
    };

    update(item.id, data);
  }, [item.isDone]);

  const title = item.isDone ? "Uncheck" : "Check";

  return (
    <Wrapper importance={item.importance} isDone={item.isDone}>
      <Checkbox title={title} onClick={onClick}>
        {item.isDone && <i className="material-icons">check</i>}
      </Checkbox>
      <Title> {item.title} </Title>

      <DeleteButton onClick={() => deleteTask(item.id)}>
        <i className="material-icons">delete</i>
      </DeleteButton>
    </Wrapper>
  );
};
