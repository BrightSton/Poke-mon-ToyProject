// REACT QUERY 이용해서 오픈 API 읽어오기 성공!
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";

const getPokeList = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=153&offset=0");
};

const CardBox = () => {
  const poke_query = useQuery("results", getPokeList, {
    onSuccess: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    console.log(poke_query.data?.data?.results);
  }, [poke_query.data?.data?.results]);

  return (
    <Cards>
      {poke_query.data?.data?.results.map((d, index) => {
        return (
          <Card style={{ width: "15rem", margin: "1rem" }} key={d.card}>
            <Card.Img
              variant="top"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
            />
            <Card.Body>
              <Card.Title>{d.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-warning">상세 내용</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Cards>
  );
};

const Cards = styled.div`
  width: 100%;
  max-width: 5000px;
  gap: 2%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const card = styled.div`
  width: 100%;
  max-width: 235px;
  height: 235px;
  &:hover {
    cursor: default;
    background-color: #b6d3d4;
    box-shadow: 0px 0px 3px 0px rgb(255, 203, 5), 3px 3px 3px rgb(53, 100, 173);
  }
  position: relative;
  overflow: hidden;
  margin-bottom: 2%;
`;

export default CardBox;
