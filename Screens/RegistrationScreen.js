// import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch } from "react-redux";
import { authSingUpUser } from "../redux/auth/authOperations";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);

  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
  };
  const resetForm = () => {
    Keyboard.dismiss();
    dispatch(authSingUpUser(state))
    setstate(initialState);
    // console.log(state);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/img.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 20 : 113,
              }}
            >
              <Text style={styles.text}>Регистрация</Text>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, name: value }))
                }
                value={state.name}
              />
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты"
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, email: value }))
                }
                value={state.email}
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={(value) =>
                  setstate((prevState) => ({ ...prevState, password: value }))
                }
                value={state.password}
              />
              {!isShowKeyboard && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.btn}
                  onPress={resetForm}
                >
                  <Text style={{ color: "#fff", fontSize: 16 }}>
                    Зарегистрироваться
                  </Text>
                </TouchableOpacity>
              )}
              {!isShowKeyboard && (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate("Login")}
                  style={{ alignItems: "center" }}
                >
                  <Text style={{ color: "#1B4371", fontSize: 16 }}>
                    Уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    //   alignItems: 'center'
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    marginHorizontal: 16,
    color: "#212121",
    paddingLeft: 16,
    backgroundColor: "#E8E8E8",
    marginBottom: 16,
  },
  btn: {
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    height: 50,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 27,
    marginBottom: 16,
  },
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // paddingBottom: 113,
    paddingTop: 92,
  },
});
