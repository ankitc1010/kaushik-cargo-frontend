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

import SignUp from "../components/common/SignUp";
import SignIn from "../components/common/SignIn";

const ButtonWrapper = styled.div`
  text-align: center;
  > button {
    min-width: 285px;
  }
`;

const Home = () => (
  <div>
    <Head title="Home" />

    <SignUp />
    <SignIn />

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
