import React from "react";
import Link from "next/link";
import styled from "styled-components";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Input,
  Button,
  Menu,
  Segment
} from "semantic-ui-react";

import Head from "../components/head";
import Nav from "../components/nav";

const ButtonWrapper = styled.div`
  text-align: center;
  > button {
    min-width: 285px;
  }
`;

const Home = () => (
  <div>
    <Head title="Home" />

    <Container>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <h1 className="title">Choose Service</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <ButtonWrapper>
              <Button size="huge">Service 1</Button>
            </ButtonWrapper>
          </Grid.Column>
          <Grid.Column>
            <ButtonWrapper>
              <Button size="huge">Service 2</Button>
            </ButtonWrapper>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
