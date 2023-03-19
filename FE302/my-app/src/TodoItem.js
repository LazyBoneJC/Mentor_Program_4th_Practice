import styled from "styled-components";
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from "./constants/style";

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

  ${(props) => props.size === "XL" && `font-size: 20px;`}
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

// React component 裡面使用 styled-component
export default function TodoItem({ className, size, todo, handleDeleteTodo }) {
  return (
    <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <TodoContent size={size}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button>已完成</Button>
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
