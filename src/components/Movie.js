import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LIKE_MOVIE = gql`
  mutation toggleLike($id: Int!){
    toggleLike(id: $id) @client
  }
`

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg}), url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png);
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;

export default ({ id, bg, isLiked }) => {
  const [toggleLike] = useMutation(LIKE_MOVIE, { variables: { id: +id } });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
      <button onClick={toggleLike}>{isLiked ? "Unlike 💔" : "Like 💖"}</button>
    </Container>
  )
};