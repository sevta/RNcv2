import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import layout from "../constants/Layout";

import {
  Container,
  Header,
  Body,
  Grid,
  Title,
  Left,
  Right,
  Col,
  H1,
  Card,
  CardItem,
  Content,
  H3,
  Thumbnail,
} from "native-base";
import { MonoText } from "../components/StyledText";
import Carousel from "react-native-snap-carousel";
export default function HomeScreen() {
  const carouselRef = React.useRef();
  const [slides, setSlides] = React.useState([
    {
      label: "a",
    },
    {
      label: "a",
    },
    {
      label: "a",
    },
    {
      label: "a",
    },
  ]);

  React.useEffect(() => {
    console.log("window", layout);
  });

  function renderItem({ item, index }) {
    return (
      <Card>
        <CardItem cardBody style={{ overflow: "hidden" }}>
          <Image
            style={{ width: layout.window.width, height: 300 }}
            source={{
              uri:
                "https://images.unsplash.com/photo-1558980664-1db506751c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            }}
          />
        </CardItem>
        <CardItem>
          <H3 style={{ paddingVertical: 20 }}>Hellow</H3>
        </CardItem>
      </Card>
    );
  }

  return (
    <Container>
      <Header
        noShadow
        style={{ backgroundColor: "deepskyblue" }}
        androidStatusBarColor="deepskyblue"
      >
        <Body>
          <Title style={{ paddingLeft: 16 }}>Covid19</Title>
        </Body>
      </Header>
      <Content style={{ flex: 1, paddingTop: 20 }}>
        <Grid>
          <Col style={{ alignItems: "center", justifyContent: "center" }}>
            <Carousel
              loop
              layout={"default"}
              ref={carouselRef}
              data={slides}
              sliderWidth={layout.window.width}
              itemWidth={layout.window.width - 32}
              renderItem={renderItem}
            />
          </Col>
        </Grid>
        <View style={{ marginTop: 12 }}>
          <BadgeList />
          <BadgeList />
          <BadgeList />
        </View>
      </Content>
    </Container>
  );
}

function BadgeList() {
  return (
    <Grid>
      <Col style={{ paddingHorizontal: 16 }}>
        <Card transparent={true}>
          <CardItem
            style={{ borderRadius: 8, backgroundColor: "whitesmoke" }}
            bordered={false}
          >
            <Body>
              <View>
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#222",
                  }}
                >
                  data terkini di indonesia
                </Text>
                <Text
                  style={{
                    textTransform: "uppercase",
                    color: "#222",
                    opacity: 0.5,
                    marginTop: 4,
                  }}
                >
                  2020-04-14
                </Text>
              </View>
            </Body>
          </CardItem>
        </Card>
      </Col>
    </Grid>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
