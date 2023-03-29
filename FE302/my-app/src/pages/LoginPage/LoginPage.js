import React, { useContext, useState } from "react";
import styled from "styled-components";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

const Form = styled.form`
  width: 20%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const FormSubmitButton = styled.input`
  width: 80%;
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

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setErrorMessage(null);
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    login(username, password).then((data) => {
      setIsLoading(false);
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);

      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(""); // getMe失敗，代表登入失敗，清空 token
          return setErrorMessage(response.message);
        }
        setUser(response.data);
        setUsername("");
        setPassword("");
        navigate("/");
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {isLoading && <Loading>Loading...</Loading>}
      <InputContainer>
        username:{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <FormSubmitButton type="submit"></FormSubmitButton>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
  );
}
