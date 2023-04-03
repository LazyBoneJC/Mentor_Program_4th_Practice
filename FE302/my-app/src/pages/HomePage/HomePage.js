import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Paginator from "../../components/Paginator";
import { Link } from "react-router-dom";
import { getPosts, getPaginatePosts } from "../../WebAPI";

const Root = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const PostContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const PostTitle = styled(Link)`
  font-size: 24px;
  color: #333;
  text-decoration: none;
  &:hover {
    color: navy;
    transition: 0.3s;
  }
`;

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

function Post({ post }) {
  return (
    <PostContainer>
      <PostTitle to={`/posts/${post.id}`}>
        {`[${post.id}] `}
        {post.title}
      </PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 15;

  useEffect(() => {
    getPaginatePosts(currentPage, limit).then((posts) => setPosts(posts));
  }, [currentPage]);

  // get content data's length
  useEffect(() => {
    getPosts().then((totalPosts) => {
      console.log("Total posts:", totalPosts.length);
      return setTotalPosts(totalPosts.length);
    });
  }, [totalPosts]);

  return (
    <Root>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
      <Paginator
        currentPage={currentPage}
        total={totalPosts}
        limit={limit}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </Root>
  );
}
