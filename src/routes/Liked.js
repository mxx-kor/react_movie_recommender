import React from "react";
import { useQuery, gql } from "@apollo/client";
import Movie from "../components/Movie";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const GET_LIKED = gql`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  height: 45vh;
  color: white;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 35px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 70%;
  position: relative;
  top: -50px;
`;

const Nav = styled.div`
    padding-top: 20px;
    margin-left: 30px;  
`

const LikedMovies = () => {
    const { loading, data } = useQuery(GET_LIKED);

    return (
        <Container>
            <Header>
                <Nav>
                    <Link to="/react_movie_recommender/">
                        <AiFillHome color="white" size="40" />
                    </Link>
                </Nav>
                <Title>
                    Liked Movies
                </Title>
                <Subtitle>{(data?.movies?.filter((m) => m.isLiked)).length}개의 좋아요를 표시한 영화들</Subtitle>
            </Header>
            <Movies>
                {loading ? "" : data?.movies?.filter((m) => m.isLiked).map((m) => (<Movie key={m.id} id={m.id} isLiked={m.isLiked} bg={m.medium_cover_image} />))}
            </Movies>
        </Container>
    )
}

export default LikedMovies;