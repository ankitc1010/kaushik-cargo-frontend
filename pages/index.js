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
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item name="home" active={true} />
        <Menu.Item name="Contact" />
        <Menu.Item name="About" />
      </Menu>
    </Segment>
    <Container>
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <h1 className="title">Admin Panel</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column />
          <Grid.Column>
            <center>
              <Input
                size="huge"
                icon="user"
                iconPosition="left"
                placeholder="User Name"
              />
            </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <center>
              <Input
                size="huge"
                icon="lock"
                iconPosition="left"
                type="password"
                placeholder="Password"
              />
            </center>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <ButtonWrapper>
              <Button primary size="huge">
                Sign In
              </Button>
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
