import React from "react";
import Link from "next/link";
import { Segment, Menu } from "semantic-ui-react";
import User from "./common/User";

const links = [
  { href: "https://github.com/segmentio/create-next-app", label: "Github" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item name="home" active={true} />
        <Menu.Item name="Contact" />
        <Menu.Item name="About" />
        <User>
          {({ data }) => {
            if (data) {
              return (
                <Link href="/select">
                  <Menu.Item name="Select Service" />
                </Link>
              );
            } else {
              return <Menu.Item name="Not Logged In" />;
            }
          }}
        </User>
      </Menu>
    </Segment>
  </nav>
);

export default Nav;
