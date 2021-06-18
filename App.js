import React from "react";
import {
  Text,
  View,

} from "react-native";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginHorizontal: 10,
            borderBottomWidth: 1,
            borderColor: "grey",
          }}
        >
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
      <View style={{ flex: 10,justifyContent:"center",alignItems:"center" }}>
       <Text>Content</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontStyle: "italic" }}>Dhiya Training & Services</Text>
      </View>
    </View>
  );
};

export default App;

