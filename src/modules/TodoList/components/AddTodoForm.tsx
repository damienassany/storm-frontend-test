import * as React from "react";
import styled from "styled-components";
import { Row } from "../../../shared/components/Row";
import { Importances } from "../../../shared/helpers/getListItemColor";
import { observer } from "mobx-react";
import { AddTodoFormProps } from "../containers/AddTodoFormContainer";
import { Column } from "../../../shared/components/Column";

const TitleInput = styled.input`
  height: 50px;
  border: none;
  border-bottom: 2px solid black;
  font-size: 20px;
`;

const Input = styled.input`
  height: 50px;
`;

const StyledColumn = styled(Column)`
  align-items: center;
`;

const StyledRow = styled(Row)`
  ${StyledColumn} {
    margin-right: 15px;
  }
`;

const BoldParagraph = styled.p`
  font-weight: bold;
`;

const SubmitButton = styled.button<{ isValid: boolean; }>`
  color: white;
  background-color: black;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isValid ? 1 : 0.4};
`;

export const AddTodoForm = observer(props => {
  const { updateImportance, updateTitle, showForm, todo, addTodo } = props as AddTodoFormProps;

  const onClick = React.useCallback(() => {
    addTodo(todo);
  }, [todo]);

  const formIsValid = todo.title !== "" && todo.importance !== null;

  return showForm ? (
    <Row>
      <Column>
        <BoldParagraph>Title</BoldParagraph>
        <TitleInput
          id="title"
          type="text"
          name="title"
          onChange={e => updateTitle(e.currentTarget.value)}
        />
      </Column>

      <Column>
        <BoldParagraph>Importance</BoldParagraph>
        <StyledRow>
          <StyledColumn>
            <label htmlFor="low">Low</label>
            <Input
              checked={todo.importance === Importances.Low}
              id="low"
              type="radio"
              name="importance"
              value={Importances.Low}
              onChange={e => updateImportance(e.currentTarget.value)}
            />
          </StyledColumn>

          <StyledColumn>
            <label htmlFor="medium">Medium</label>
            <Input
              checked={todo.importance === Importances.Medium}
              onChange={e => updateImportance(e.currentTarget.value)}
              id="medium"
              type="radio"
              name="importance"
              value={Importances.Medium}
            />
          </StyledColumn>

          <StyledColumn>
            <label htmlFor="high">High</label>
            <Input
              checked={todo.importance === Importances.High}
              id="high"
              type="radio"
              name="importance"
              value={Importances.High}
              onChange={e => updateImportance(e.currentTarget.value)}
            />
          </StyledColumn>
        </StyledRow>
      </Column>

      <SubmitButton isValid={formIsValid} disabled={!formIsValid} onClick={onClick}>
        <i className="material-icons">add</i>
      </SubmitButton>
    </Row>
  ) : null;
});
