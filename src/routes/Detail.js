import React from "react";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Movie from "../components/Movie";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";

const GET_MOVIE = gql`
    query getMovie($id: Int!){
        movie(id: $id) {
            id
            title
            medium_cover_image
            language
            rating
            description_intro
            isLiked @client
        }
        suggestions(id: $id){
          id
          medium_cover_image
          isLiked @client
        }
    }
`

const Container = styled.div`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
`;

const Row = styled.div`
  padding-top: 5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

const Column = styled.div`
  width: 50%
`;

const Title = styled.h1`
  font-size: 65px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  letter-spacing: -1px;
  height: 300px;
  font-size: 28px;
  width: 75%;
  overflow: auto;
`;

const Poster = styled.div`
  width: 250px;
  height: 400px;
  background-image: url(${props => props.bg}), url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png);
  background-size: cover;
  background-position: center;
  background-color: transparent;
  border-radius: 5px;
`;

const SgTitle = styled.h1`
  padding-top: 5%;
  margin-left: 15%;
  font-size: 40px;
  font-weight: bold;
  color: white;
`

const Suggestion = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 70px;
  width: 80%;
  padding-bottom: 20px
`;

const Nav = styled.div`
    padding-top: 20px;
    margin-left: 30px;
`

export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {id: +id}
    });
    return (
        <Container>
          <Nav>
            <Link to="/react_movie_recommender/">
              <AiFillHome color="white" size="40" />
            </Link>
          </Nav>
          <Row>
            <Column>
              <Title>{loading ? "Loading..." : `${data?.movie?.title} ${data?.movie?.isLiked ? "💖" : ""}`}</Title>
              <Subtitle>{data?.movie?.language === "en" ? "English" : data?.movie?.language} · {data?.movie?.rating}</Subtitle>
              <Description>{data?.movie?.description_intro}</Description>
            </Column>
            <Poster bg={data?.movie?.medium_cover_image}></Poster>
          </Row>
          <SgTitle>{loading ? "추천 영화 불러오는중..." : "More Suggestions"}</SgTitle>
          <Row>
            <Suggestion>
              {data?.suggestions?.map(m => (<Movie key={m.id} id={m.id} isLiked={m.isLiked} bg={m.medium_cover_image} />))}
            </Suggestion>
          </Row>
        </Container>
    )
};