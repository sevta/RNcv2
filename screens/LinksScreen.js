import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import {
  Content,
  Container,
  Header,
  Body,
  Title,
  Right,
  Icon,
  Button,
  List,
  ListItem,
  H3,
  Left,
  Tabs,
  Tab,
  TabHeading,
  H2,
  Grid,
  Col,
  Spinner,
} from "native-base";

const colorPalette = {
  dark1: "#263238",
};

const API = "https://api.covid19api.com/summary";

const isThemeLight = (theme) => theme == "light";

export default function LinksScreen() {
  const [coronaSummary, setCoronaSummary] = React.useState([]);
  const [coronaGlobal, setCoronaGlobal] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    getCoronaData();
  }, []);

  function getCoronaData() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        setCoronaSummary(data);
        setCoronaGlobal(data.Global);
      })
      .catch((err) => console.log("err", err))
      .finally(() =>
        setTimeout(() => {
          setLoading(false);
        }, 3000)
      );
  }

  function onSwitchDarkMode(darkMode) {
    darkMode ? setTheme("dark") : setTheme("light");
  }

  return (
    <Container>
      <Header
        hasTabs
        style={{
          backgroundColor: isThemeLight(theme)
            ? "whitesmoke"
            : colorPalette.dark1,
        }}
        androidStatusBarColor={
          theme == "light" ? "whitesmoke" : colorPalette.dark1
        }
        noShadow
      >
        <Body>
          <Title
            style={{
              paddingLeft: 10,
              color: theme == "light" ? "#333" : "#fff",
            }}
          >
            Cegah Covid 19
          </Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              name="menu"
              style={{
                color: isThemeLight(theme) ? colorPalette.dark1 : "#fff",
              }}
            ></Icon>
          </Button>
        </Right>
      </Header>
      <Tabs
        tabContainerStyle={{ elevation: 0 }}
        tabBarPosition="bottom"
        tabBarUnderlineStyle={{
          backgroundColor: isThemeLight(theme) ? colorPalette.dark1 : "#fff",
        }}
      >
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: isThemeLight(theme)
                  ? "whitesmoke"
                  : colorPalette.dark1,
                borderColor: colorPalette.dark1,
              }}
              // activeTabStyle={{ backgroundColor: colorPalette.dark1 }}
            >
              <Text
                style={{
                  color: isThemeLight(theme) ? colorPalette.dark1 : "#fff",
                }}
              >
                Home
              </Text>
            </TabHeading>
          }
        >
          <Tab1 loading={loading} theme={theme} />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: isThemeLight(theme)
                  ? "whitesmoke"
                  : colorPalette.dark1,
              }}
            >
              <Text
                style={{
                  color: isThemeLight(theme) ? colorPalette.dark1 : "#fff",
                }}
              >
                Statistik
              </Text>
            </TabHeading>
          }
        >
          <Tab2
            coronaGlobal={coronaGlobal}
            coronaSummary={coronaSummary}
            loading={loading}
            theme={theme}
          />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{
                backgroundColor: isThemeLight(theme)
                  ? "whitesmoke"
                  : colorPalette.dark1,
              }}
            >
              <Text
                style={{
                  color: isThemeLight(theme) ? colorPalette.dark1 : "#fff",
                }}
              >
                Berita
              </Text>
            </TabHeading>
          }
        >
          <Tab3 theme={theme} onSwitchDarkMode={onSwitchDarkMode} />
        </Tab>
      </Tabs>
    </Container>
  );
}

function Tab1({ loading, theme }) {
  return (
    <Content
      style={{
        flex: 1,
        backgroundColor: theme == "light" ? "#fff" : colorPalette.dark1,
      }}
    >
      {loading ? (
        <Spinner />
      ) : (
        <List>
          {Array(30)
            .fill("")
            .map((_, i) => (
              <ListItem
                noBorder
                thumbnail
                key={i}
                button
                itemDivider={false}
                selected
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "rgba(38,50,56,1)",
                }}
              >
                <Left>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: isThemeLight(theme)
                        ? colorPalette.dark1
                        : "#fff",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <H3
                      style={{
                        color: isThemeLight(theme)
                          ? "#fff"
                          : colorPalette.dark1,
                      }}
                    >
                      01
                    </H3>
                  </View>
                </Left>
                <Body>
                  <Text
                    style={{
                      fontSize: 18,
                      color: isThemeLight(theme) ? colorPalette.dark1 : "#fff",
                    }}
                  >
                    Title
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "600",
                      color: isThemeLight(theme) ? colorPalette.dark1 : "#fff",
                    }}
                  >
                    loremlorem loremlorem loremlorem{" "}
                  </Text>
                </Body>
                <Right></Right>
              </ListItem>
            ))}
        </List>
      )}
    </Content>
  );
}

function Tab2({ coronaGlobal, coronaSummary, loading, theme }) {
  return (
    <Content
      style={{
        flex: 1,
        backgroundColor: isThemeLight(theme) ? "#fff" : colorPalette.dark1,
        padding: 16,
      }}
    >
      <Grid>
        <Col>
          {loading ? (
            <Spinner />
          ) : (
            <View
              style={{
                backgroundColor: "whitesmoke",
                paddingHorizontal: 20,
                paddingVertical: 14,
                borderRadius: 12,
              }}
            >
              <Text style={{ color: "#333", fontSize: 16, marginVertical: 4 }}>
                Total confirmed {coronaGlobal.TotalConfirmed}
              </Text>
              <Text style={{ color: "#333", fontSize: 16, marginVertical: 4 }}>
                Total death {coronaGlobal.TotalDeaths}
              </Text>
              <Text style={{ color: "#333", fontSize: 16, marginVertical: 4 }}>
                Total recovered {coronaGlobal.TotalRecovered}
              </Text>
            </View>
          )}
        </Col>
      </Grid>
    </Content>
  );
}

function Tab3({ theme, onSwitchDarkMode }) {
  const [darkMode, setDarkMode] = React.useState(!isThemeLight(theme));

  React.useEffect(() => {
    onSwitchDarkMode(darkMode);
  }, [darkMode]);

  function toggleSwitch() {
    setDarkMode((prev) => !prev);
  }

  return (
    <Content
      style={{
        flex: 1,
        backgroundColor: isThemeLight(theme) ? "#fff" : colorPalette.dark1,
      }}
    >
      <List>
        <ListItem>
          <Body>
            <Text
              style={{
                color: isThemeLight(theme) ? colorPalette.dark1 : "#fff",
              }}
            >
              Dark mode
            </Text>
          </Body>
          <Right>
            <Switch value={darkMode} onValueChange={toggleSwitch} />
          </Right>
        </ListItem>
      </List>
    </Content>
  );
}

LinksScreen.navigationOptions = {
  tabBarVisible: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
});
