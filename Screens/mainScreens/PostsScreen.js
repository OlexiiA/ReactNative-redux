import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const HorizontalLine = ({}) => {
  return <View style={styles.line}></View>;
};

export default function PostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  console.log("route-params", route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts:", posts);

  const handlePress = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>Публикации</Text>
          <TouchableOpacity
            onPress={handlePress}
            style={{ marginLeft: 101, marginRight: 15 }}
          >
            <Feather name="log-in" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <HorizontalLine />
      </View>
      <View>
        <FlatList
          data={posts}
          keyExtractor={(item, indx) => indx.toString()}
          renderItem={({ item }) => (
            <View style={styles.boxImg}>
              <Image source={{ uri: item.photo }} style={styles.img} />
            </View>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Map")}
          style={{ alignItems: "center", marginBottom: 20, marginTop: 20 }}
        >
          <Text style={{ color: "#1B4371", fontSize: 16 }}>MapScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Comments")}
          style={{ alignItems: "center" }}
        >
          <Text style={{ color: "#1B4371", fontSize: 16 }}>Comments</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 20,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 11,
    paddingTop: 11,
    fontSize: 17,
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "100%",
  },
  boxImg: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    width: 300,
    height: 200,
    borderRadius: 20,
  },
});
