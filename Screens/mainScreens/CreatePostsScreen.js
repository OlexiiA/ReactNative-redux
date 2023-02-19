import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Location from 'expo-location';

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

export default function CreatePostsScreen({navigation}) {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = async () => {
    // const photo = await camera.takePictureAsync();
    // setPhoto(photo.uri);
    // let location = await Location.getCurrentPositionAsync();
    // console.log("location:", location);
    // console.log(photo);
    // if (camera) {
    //   const photo = await camera.takePictureAsync();
    //   setPhoto(photo.uri);
    //   console.log(photo);
    // }
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  
    const { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync();
      console.log("location:", location);
    } else {
      // Handle permission not granted error
    }
    
    console.log(photo);
  };
  const sendPhoto = () => {
    navigation.navigate("Posts", {photo} )
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 70, marginLeft: 16 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 17, fontWeight: "500" }}>
            Создать публикацию
          </Text>
        </View>
        <HorizontalLine />
        <View style={styles.camContainer}>
          <Camera style={styles.camera} ref={setCamera}>
            {photo && (
              <Image
                source={{ uri: photo }}
                style={{ height: 200, width: 200 }}
              />
            )}
            <TouchableOpacity onPress={takePhoto} style={styles.btn}>
              <MaterialCommunityIcons
                name="camera"
                size={32}
                color="rgba(245, 245, 245, 0.5)"
              />
            </TouchableOpacity>
          </Camera>
          <TouchableOpacity onPress={sendPhoto} style={styles.btnSend}>
            <Text style={{ color: "#fff" }}>Опубликовать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "flex-start",
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
  camContainer: {
    flex: 1,
    width: "100%",
  },
  camera: {
    height: 300,
    alignItems: "center",
  },
  btn: {
    marginTop: 100,
    borderWidth: 1,
    borderRadius: 100,
    padding: 5,
    borderColor: "rgba(245, 245, 245, 0.5)",
    position: "absolute",
  },
  btnSend: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    height: 50,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    // marginBottom: 16,
  },
});
