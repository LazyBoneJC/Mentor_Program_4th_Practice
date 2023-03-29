import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import Header from "../Header";
import PostPage from "../../pages/PostPage";
import NewPostPage from "../../pages/NewPostPage";
import { AuthContext } from "../../context";
import { getMe } from "../../WebAPI";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Root = styled.div`
  padding-top: 64px;
`;

function App() {
  const [user, setUser] = useState(null); // 如果 user 有資料，代表使用者有登入

  useEffect(() => {
    // token 不存在就不 call getMe 了
    if (!localStorage.getItem("token")) return;

    // 若 token 存在，call getMe 確認身份，並把登入狀態設置好。
    getMe().then((response) => {
      if (response.ok) {
        setUser(response.data);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Root>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/new-post" element={<NewPostPage />} />
            <Route path="/posts/:postId" element={<PostPage />} />
          </Routes>
        </Root>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
