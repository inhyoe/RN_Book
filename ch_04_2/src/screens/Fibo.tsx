import React, { useMemo } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import * as D from "../data";
import { fibonacci } from "./fibonacci";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import { fa } from "@faker-js/faker/.";

interface Props {}
const title = "Fibo";
const Fibo = ({}: Props) => {
  const memoizedFibonacci = useMemo(() => fibonacci, []);
  const fibos = useMemo(
    () =>
      D.makeArray(20 + 1).map((notUsed, index) => ({
        number: index,
        fibonacci: memoizedFibonacci(index),
      })),
    []
  );

  console.log("fibos:", fibos); // fibos 배열 출력

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>Fibo</Text>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        horizontal={false}
        contentContainerStyle={[styles.contentContainerStyle]}
        data={fibos}
        renderItem={({ item }) => (
          <Text style={[styles.text]}>
            {item.number} : {item.fibonacci}
          </Text>
        )}
        keyExtractor={(item) => item.number.toString()}
      />
      <Text>asd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, backgroundColor: "#00008B" }, // Colors.blue900 대신 색상 코드 사용
  text: { fontSize: 20, color: "white" },
  contentContainerStyle: { alignItems: "center" }, // flex: 1 제거
});
export default Fibo;
