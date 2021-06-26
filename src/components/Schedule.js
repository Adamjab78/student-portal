import React from "react";
import { Text, View } from "react-native";

const Schedule = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ marginVertical: 10, fontSize: 17, fontWeight: "bold" }}>
        Schedule
      </Text>
      <View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View />
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Pagi</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>Petang</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text style={{ fontStyle: "italic" }}>Isnin</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 1</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 2</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text style={{ fontStyle: "italic" }}>Selasa</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 3</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 4</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text style={{ fontStyle: "italic" }}>Rabu</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 5</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 6</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text style={{ fontStyle: "italic" }}>Khamis</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 7</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 8</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <Text style={{ fontStyle: "italic" }}>Jumaat</Text>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 9</Text>
            </View>
          </View>
          <View style={{ flex: 1, padding: 5, margin: 5 }}>
            <View>
              <Text>Subjek 10</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Schedule;
