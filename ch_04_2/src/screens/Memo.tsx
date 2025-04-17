import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {}

const Memo = ({}: Props) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Memo;
