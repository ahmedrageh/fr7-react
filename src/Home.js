import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  Link,
  NavTitle,
  NavRight,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Popup,
  View
} from "framework7-react";

export default () => {
  return (
    <Page>
      <Navbar>
        <NavLeft>
          <Link panelOpen="left">Left Panel</Link>
        </NavLeft>
        <NavTitle>My App</NavTitle>
        <NavRight>
          <Link panelOpen="right">Right Panel</Link>
        </NavRight>
      </Navbar>
      <Toolbar bottom>
        <Link>Left Link</Link>
        <Link>Right Link</Link>
      </Toolbar>
      <Block strong>
        <p>Here is your blank Framework7 app. Let's see what we have here.</p>
      </Block>
      <BlockTitle>Navigation</BlockTitle>
      <List>
        <ListItem link="/about/" title="About" />
      </List>
      <BlockTitle>Modals</BlockTitle>
      <Block strong>
        <Button fill raised popupOpen="#popup">
          Popup
        </Button>
      </Block>
      <BlockTitle>Panels</BlockTitle>
      <Block strong>
        <Row>
          <Col width="50">
            <Button fill raised panelOpen="left">
              Left Panel
            </Button>
          </Col>
          <Col width="50">
            <Button fill raised panelOpen="right">
              Right Panel
            </Button>
          </Col>
        </Row>
      </Block>
      <List>
        <ListItem
          link="/load-something-that-doesnt-exist/"
          title="Default Route (404)"
        />
      </List>

      <Popup id="popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
              architecto. Cupiditate laudantium rem nesciunt numquam, ipsam.
              Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto
              nemo quos ullam obcaecati, quod.
            </Block>
          </Page>
        </View>
      </Popup>
    </Page>
  );
};
