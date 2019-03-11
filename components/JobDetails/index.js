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
  Icon,
  Button,
  Menu,
  Segment,
  Table,
  Label
} from "semantic-ui-react";

import Head from "../head";
import Nav from "../nav";

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0rem, 20rem) 1fr minmax(0rem, 20rem);
  > div {
    height: 100vh;
    padding: 2rem 1rem;
    border-radius: 4px;
  }
  > div:first-child {
    max-width: 20rem;
    background: #f5f5f5;

    > div:first-child {
      display: flex;
      align-items: center;
      padding-bottom: 1rem;
      border-bottom: 2px solid grey;
      > div:last-child {
        margin-left: 1rem;
      }
      h4 {
        margin-bottom: 0;
      }
    }
    > div:not(:first-child) {
      > div {
        margin: 1rem 0;
      }
      h4 {
        margin-bottom: 0px;
        color: #332f2f;
      }
    }
  }
  > div:last-child {
    max-width: 20rem;
    background: whitesmoke;
    height: 100%;
    display: flex;
    flex-direction: column;

    > div:first-child {
      text-align: center;
      > div {
        background: #e8e8e8;
        padding: 2rem 2rem;
      }
      h2 {
        text-align: left;
      }
    }
    > div:nth-child(2) {
      margin-top: 1rem;
      height: 100%;
      > div {
        background: white;
        height: 100%;
      }
    }
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  > button {
    min-width: 285px;
  }
`;

const Home = () => (
  <div>
    <Head title="Home" />
    <StyledLayout>
      <div>
        <div>
          <Icon circular inverted color="teal" name="user" size="big" />
          <div>
            <h4>JN Projects Private Limited</h4>
            <p>Bengaluru, India</p>
          </div>
        </div>
        <div>
          <div>
            <h4>Project Title</h4>
            <p>Import Car Equipments</p>
          </div>
          <div>
            <h4>Created</h4>
            <p>20th March, 2018</p>
          </div>
          <div>
            <h4>Status</h4>
            <p>In process</p>
          </div>
          <div>
            <h4>Files Shared</h4>
            <p>6</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Files</h2>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Size</Table.HeaderCell>
              <Table.HeaderCell>Uploaded</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>23rd March, 2018</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Proposal_New.pdf</Table.Cell>
              <Table.Cell>500kb</Table.Cell>
              <Table.Cell>22:30pm</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Checklist.pdf</Table.Cell>
              <Table.Cell>2000kb</Table.Cell>
              <Table.Cell>22:15pm</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Final_List.pdf</Table.Cell>
              <Table.Cell>3000kb</Table.Cell>
              <Table.Cell>21:45pm</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>22rd March, 2018</Label>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Proposal_New.pdf</Table.Cell>
              <Table.Cell>500kb</Table.Cell>
              <Table.Cell>22:30pm</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Checklist.pdf</Table.Cell>
              <Table.Cell>2000kb</Table.Cell>
              <Table.Cell>22:15pm</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Final_List.pdf</Table.Cell>
              <Table.Cell>3000kb</Table.Cell>
              <Table.Cell>21:45pm</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <div>
        <div>
          <h2>File Upload</h2>
          <div>
            <Icon name="cloud upload" size="massive" />
            <p>Drop File Here</p>
          </div>
        </div>
        <div>
          <h2>Chat</h2>
          <div>
            <Input
              icon={<Icon name="send" inverted circular link />}
              placeholder="Type a message"
            />
          </div>
        </div>
      </div>
    </StyledLayout>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .ui {
        margin: 0 0 !important;
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
