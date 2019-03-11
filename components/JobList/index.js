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
  Segment,
  Icon,
  Label,
  Table
} from "semantic-ui-react";

import Head from "../head";
import Nav from "../nav";

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
            <h1 className="title">Job List</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <center>
              <Table celled selectable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Sl.no</Table.HeaderCell>
                    <Table.HeaderCell>Job Title</Table.HeaderCell>
                    <Table.HeaderCell>Created</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon>New</Label>1
                    </Table.Cell>
                    <Table.Cell>Job title 1</Table.Cell>
                    <Table.Cell>20th May, 2018</Table.Cell>
                    <Table.Cell>Process</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon>Updates</Label>2
                    </Table.Cell>
                    <Table.Cell>Job title 2</Table.Cell>
                    <Table.Cell>5th May, 2018</Table.Cell>
                    <Table.Cell>Process</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>3</Table.Cell>
                    <Table.Cell>Job title 3</Table.Cell>
                    <Table.Cell>1th May, 2018</Table.Cell>
                    <Table.Cell>Done</Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan="4">
                      <Button primary size="small">
                        Create New
                      </Button>
                      <Menu floated="right" pagination>
                        <Menu.Item as="a" icon>
                          <Icon name="chevron left" />
                        </Menu.Item>
                        <Menu.Item as="a">1</Menu.Item>
                        <Menu.Item as="a">2</Menu.Item>
                        <Menu.Item as="a">3</Menu.Item>
                        <Menu.Item as="a">4</Menu.Item>
                        <Menu.Item as="a" icon>
                          <Icon name="chevron right" />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </center>
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
