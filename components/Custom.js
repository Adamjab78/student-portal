import React from "react";
import { View, Text as OriText, StyleSheet } from "react-native";
import styles from "../styles/styles";

const Text = ({ style, ...props }) => {
  return <OriText style={{ color: "grey", ...style }} {...props} />;
};

const SubHeader = ({ style, ...props }) => {
  return (
    <>
      <OriText
        style={[
          styles.defaultText,
          {
            color: "steelblue",
            marginVertical: 10,
            paddingHorizontal: 10,
            fontSize: 17,
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        ]}
        {...props}
      />
      {/* <View style={{height:1, backgroundColor:"steelblue", marginHorizontal:10}}/> */}
    </>
  );
};

export { Text, SubHeader };