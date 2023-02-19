import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: "",
          latitude: "",
          latitudeDelta: "",
          longitudeDelta: "",
        }}
      >
        <Marker coordinate={{ latitude: "", longitude: "" }} />
        <TouchableOpacity
          onPress={() => navigation.navigate("CreatePost")}
          style={styles.btn}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            color="#fff"
            style={{ position: "absolute" }}
          />
        </TouchableOpacity>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    marginTop: 40,
    marginLeft: 10,
    border: 1,
    borderRadius: 20,
    backgroundColor: "rgba(255, 108, 0, 0.8)",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
  },
});
