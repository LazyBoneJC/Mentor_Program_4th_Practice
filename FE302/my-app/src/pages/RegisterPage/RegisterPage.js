import React, { useContext, useState } from "react";
import styled from "styled-components";
import { register, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

const Form = styled.form`
  width: 20%;
  margin: 20px auto;
  padding: 40px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
  color: navy;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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

export default function RegisterPage() {
  const { setUser } = useContext(AuthContext);
  const [nickname, setNickname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setErrorMessage(null);
    e.preventDefault();
    if (isLoading) return;

    const regexp = /^[0-9a-zA-Z_]+$/;
    if (nickname === "" || username === "" || password === "") {
      return setErrorMessage("請輸入完整資訊");
    }
    if (
      !regexp.test(nickname) ||
      !regexp.test(username) ||
      !regexp.test(password)
    ) {
      return setErrorMessage("請輸入合法字元");
    }

    setIsLoading(true);
    register(nickname, username, password).then((data) => {
      setIsLoading(false);
      if (data.ok === 0) {
        console.log(data);
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);

      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(""); // getMe失敗，代表註冊失敗，清空 token
          return setErrorMessage(response.message);
        }
        console.log(response.data);
        setUser(response.data);
        setNickname("");
        setUsername("");
        setPassword("");
        navigate("/");
      });
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {isLoading && <Loading>Loading...</Loading>}
      <FormTitle>Create new account.</FormTitle>
      <InputContainer>
        nickname:{" "}
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputContainer>
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
