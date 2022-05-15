# 영화추천 웹앱 with React & GraphQL

## Daily Movie Recommender

> React와 GraphQL을 사용해 API를 활용, 영화를 추천하는 웹앱 구축

### Demo: https://mxx-kor.github.io/react_movie_recommender/

### 개발 목표

- React Router DOM 활용의 이해
- GraphQL을 통해 형식이 다른 데이터 활용
- GraphQL을 활용 프론트엔드에서 API 쿼리 수정하고 활용
- styled-component 사용

### 사용 기술

- React
- Apollo GraphQL
- Styled-Component

---

### 주요 기능

> 매일 추천 영화가 다른 API를 활용

    - 매일 바뀌는 추천 영화를 표시

> 상세페이지

    - useParams로 Id를 활용하여 상세 데이터를 가져옴
    - 영화에 따른 추천 영화 표시

> 좋아요 기능

    - isLiked라는 데이터를 프론트엔드에서 false로 정의
    - 버튼 클릭시 isLiked 토글
    - 좋아요가 표시된 영화들의 리스트를 filter를 활용하여 liked 페이지에 정리

> 캐시 데이터 활용

    - GraphQL의 캐시 데이터를 활용하여 방문했던 페이지를 로딩할 필요가 없음
    - 토글된 isLiked를 바로 반영하도록 설정

---

업데이트 이전의 프로젝트

## 개발 목표

> React와 API를 활용한 영화 추천 웹

## 주요 내용

> React의 router-dom을 이용해 Nav-bar를 제작

> axios를 통해 API를 가져옴

> Vanilla JS와 React JS를 이용해 웹앱을 구성함

## 프리뷰

![image](https://user-images.githubusercontent.com/82329983/167091813-b32c0b2c-1d09-4d4c-a1a7-76c303b6ffb2.png)

![image](https://user-images.githubusercontent.com/82329983/167091971-1319cc45-097c-4516-82d5-4c3df37666a2.png)
