import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { getMe, postContent } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { useNavigate } from "react-router-dom";

const Form = styled.form`
  border: 2px solid black;
  border-radius: 5px;
  width: 40%;
  margin: 20px auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: aliceblue;
`;

const PageTitle = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 60%;
  margin-bottom: 10px;
`;

const ContentTextArea = styled.textarea`
  display: block;
  width: 60%;
  margin-bottom: 10px;
`;

const FormSubmitButton = styled.input`
  width: 20%;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 100, 0.2);
    transition: 0.3s;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 20px;
`;

const Loading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function NewPostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setErrorMessage(null);
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    if (title === "" || content === "") {
      setIsLoading(false);
      return setErrorMessage("缺少標題或內容，請重新輸入。");
    }
    getMe().then((response) => {
      setIsLoading(false);
      if (response.ok !== 1) {
        setAuthToken("");
        return setErrorMessage("帳號異常，請重新登入：" + response.message);
      }
      postContent(title, content).then((res) => {
        if (res.ok && res.ok !== 1) {
          return setErrorMessage(res.message);
        }
        navigate("/");
      });
    });
  };

  const handleTextareaFocus = useCallback(() => {
    setErrorMessage(null);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      {isLoading && <Loading>Loading...</Loading>}
      <PageTitle>New Post</PageTitle>
      <InputContainer>
        Title:{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputContainer>
      <ContentTextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        inFocus={handleTextareaFocus}
        rows={15}
      />
      <FormSubmitButton type="submit"></FormSubmitButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  );
}
