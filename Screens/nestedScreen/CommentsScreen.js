import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CommentsScreen({ navigation }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    const newComment = {
      text: comment,
      date: new Date(),
    };
    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
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
        <Text style={styles.screenTitle}>Комментарии</Text>
        <View style={{ width: 40 }} />
      </View>

      <FlatList
        style={styles.commentsContainer}
        data={comments}
        renderItem={({ item }) => (
          <View style={styles.comment}>
            <Text style={styles.commentDate}>
              {item.date.toLocaleString()}
            </Text>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your comment"
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddComment}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 70,
    paddingHorizontal: 10,
    elevation: 3,
  },
  screenTitle: {
    fontSize: 17,
    fontWeight: "500",
    flex: 1,
    textAlign: "center",
  },
  commentsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  comment: {
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  commentDate: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  btn: {
    marginTop: 10,
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
