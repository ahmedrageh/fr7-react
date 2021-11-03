import React from "react";
import { App, Panel, View, Page, Block } from "framework7-react";
import PageHome from "./Home";
import PageAbout from "./About";
import PageNotFound from "./404";

const f7params = {
  id: "io.framework7.testapp", // App bundle ID
  name: "Framework7", // App name
  theme: "auto", // Automatic theme detection
  // App routes
  routes: [
    {
      path: "/",
      component: PageHome
    },
    {
      path: "/about/",
      component: PageAbout
    },
    {
      path: "(.*)",
      component: PageNotFound
    }
  ]
};

export default () => {
  return (
    <App {...f7params}>
      <Panel left reveal themeDark>
        <View>
          <Page>
            <Block>
              <p>Panel Left</p>
            </Block>
          </Page>
        </View>
      </Panel>

      <Panel right cover themeDark>
        <View>
          <Page>
            <Block>
              <p>Panel Right</p>
            </Block>
          </Page>
        </View>
      </Panel>

      <View main url="/" />
    </App>
  );
};
