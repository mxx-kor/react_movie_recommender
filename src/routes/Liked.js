import React from "react";
import { useQuery, gql } from "@apollo/client";
import Movie from "../components/Movie";
import styled from "styled-components";

const GET_MOVIES = gql`
    {
        movies {
          id
          medium_cover_image
          isLiked @client
        }
    }
`

const Container = styled.div`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 100vh;
  width: 100%;
`;

const LikedMovies = () => {
    const { loading, data } = useQuery(GET_MOVIES);

    return (
        <Container>
            {loading ? "" : data?.movies?.filter((m) => m.isLiked).map((m) => (<Movie key={m.id} id={m.id} isLiked={m.isLiked} bg={m.medium_cover_image} />))}
        </Container>
    )
}

export default LikedMovies;