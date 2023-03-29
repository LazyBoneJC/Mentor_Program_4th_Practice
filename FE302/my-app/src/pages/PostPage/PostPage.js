import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useParams } from "react-router-dom";
import { getSinglePost } from "../../WebAPI";

const Root = styled.div`
  width: 70%;
  margin: 20px auto;
`;

const PostContainer = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  background-color: aliceblue;
`;

const PostTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: navy;
  margin-bottom: 5px;
`;

const PostDate = styled.div`
  color: rgba(0, 0, 0, 0.8);
`;

const PostContent = styled.div`
  margin-top: 20px;
  font-size: 20px;
  line-height: 40px;
  word-break: break-all;
`;

function SinglePost({ post }) {
  return (
    <PostContainer>
      <PostTitle>{`${post.id}. ${post.title}`}</PostTitle>
      <PostDate>{new Date(post.createdAt).toLocaleString()}</PostDate>
      <PostContent>{post.body}</PostContent>
    </PostContainer>
  );
}

SinglePost.propTypes = {
  post: PropTypes.object,
};

export default function HomePage() {
  const [post, setPost] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    getSinglePost(postId).then((post) => setPost(post));
  }, [postId]);

  return (
    <Root>
      {post.map((singlePost) => {
        return <SinglePost key={singlePost.id} post={singlePost} />;
      })}
    </Root>
  );
}
