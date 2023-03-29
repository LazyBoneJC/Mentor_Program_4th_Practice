import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "../../constants/style";
import React from "react";
import PropTypes from "prop-types";

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
  & + & {
    margin-top: 5px;
  }
  background: papayawhip;
`;

// font-size: ${props => props.size === "XL" ? "20px" : "15px"};
const TodoContent = styled.div`
  color: ${(props) => props.theme.colors.default};
  font-size: 15px;
  font-weight: bold;

  ${(props) => props.size === "XL" && `font-size: 20px;`};
  ${(props) => props.$isDone && `text-decoration: line-through;`};
`;

const TodoButtonWrapper = styled.div``;

const Button = styled.button`
  padding: 4px;
  color: black;
  font-size: 20px;

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }

  ${MEDIA_QUERY_LG} {
    font-size: 12px;
  }

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 4px;
  }
`;

const DeleteButton = styled(Button)`
  color: white;
  background: red;
  &:hover {
    color: white;
  }
`;

// function component
// React component 裡面使用 styled-component
export default function TodoItem({
  className,
  size,
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
}) {
  return (
    <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <TodoContent $isDone={todo.isDone} size={size}>
        {todo.content}
      </TodoContent>
      <TodoButtonWrapper>
        <Button
          onClick={() => {
            handleToggleIsDone(todo.id);
          }}
        >
          {todo.isDone ? "未完成" : "已完成"}
          {/* {todo.isDone && "未完成"}
          {!todo.isDone && "已完成"} */}
        </Button>
        <DeleteButton
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
        >
          刪除
        </DeleteButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}

TodoItem.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  todo: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    isDone: PropTypes.bool,
  }),
  handleDeleteTodo: PropTypes.func,
  handleToggleIsDone: PropTypes.func,
};
