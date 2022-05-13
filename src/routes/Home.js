import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from 'styled-components'
import Movie from "../components/Movie";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
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

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
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
    display: flex;
    justify-content: end;
    padding-top: 20px;
    margin-right: 30px;  
`

const Liked = styled.div`
  position: relative;
`

const Badge = styled.div`
    position: absolute;
    top: 25px;
    right: 0px;
    padding:5px 7px;
    color:#fff;
    background-color:#bf1f1f;
    font-size:10px;
    border-radius:20px;
    border:solid 1px #c93a3a;
`


export default () => {
    const { loading, data } = useQuery(GET_MOVIES);

    return (
        <Container>
            <Header>
                <Nav>
                  <Link to={"/react_movie_recommender/liked"}>
                    <Liked>
                      <AiFillHeart color="white" size="40" />
                      {loading ? "" :  <Badge>{(data?.movies?.filter((m) => m.isLiked)).length}</Badge>}
                    </Liked>
                  </Link>
                </Nav>
                <Title>Movie Recommender</Title>
                <Subtitle>with React, GraphQL</Subtitle>
            </Header>
            {loading && <Loading>Loading...</Loading>}
            <Movies>
              {data?.movies?.map(m => (<Movie key={m.id} id={m.id} isLiked={m.isLiked} bg={m.medium_cover_image} />))}
            </Movies>
        </Container>
    );
};