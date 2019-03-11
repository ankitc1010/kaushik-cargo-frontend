import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Input,
  Button,
  Menu,
  Segment,
  Form
} from "semantic-ui-react";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      id
      email
      name
    }
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  > button {
    min-width: 285px;
  }
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleChange = (e, fn) => {
    fn(e.target.value);
  };

  return (
    <Mutation mutation={SIGNUP_MUTATION} variables={{ name, email, password }}>
      {(signup, { error, loading }) => {
        if (error) {
          return <div>{JSON.stringify(error)}</div>;
        }
        if (loading) {
          return <div>Loading</div>;
        }
        return (
          <Container>
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signup();
                handleChange({ target: { value: "" } }, setName);
                handleChange({ target: { value: "" } }, setEmail);
                handleChange({ target: { value: "" } }, setPassword);
              }}
            >
              <Grid>
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <h1 className="title">Sign Up</h1>
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
                        placeholder="Name"
                        value={name}
                        onChange={e => handleChange(e, setName)}
                      />
                    </center>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                  <Grid.Column />
                  <Grid.Column>
                    <center>
                      <Input
                        size="huge"
                        icon="mail"
                        iconPosition="left"
                        placeholder="Email"
                        value={email}
                        onChange={e => handleChange(e, setEmail)}
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
                        value={password}
                        onChange={e => handleChange(e, setPassword)}
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
            </Form>
          </Container>
        );
      }}
    </Mutation>
  );
};

export { SignUp as default, SIGNUP_MUTATION };
