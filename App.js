import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Back</Text>
          </View>
          <View
            style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Portal Pelajar</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Icon</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 10 }}>
        <Profile />
        <Schedule />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontStyle: "italic" }}>Dhiya Training & Services</Text>
      </View>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Profile
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./assets/favicon.png")}
            style={{ height: 50, width: 50 }}
          />
        </View>
        <View style={{ flex: 3, alignItems: "flex-start" }}>
          <Text>John Doe</Text>
          <Text>Some other useful information</Text>
        </View>
      </View>
    </View>
  );
};

const Schedule = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Schedule
      </Text>
      <View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text>Hari</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Pagi</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Petang</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text>Hari</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Pagi</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Petang</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text>Hari</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Pagi</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Petang</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text>Hari</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Pagi</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Petang</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text>Hari</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Pagi</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Petang</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
});

export default App;
