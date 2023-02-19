import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Octicons, Feather } from "@expo/vector-icons";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/mainScreens/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreens/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreens/ProfileScreen";
import MapScreen from "./Screens/nestedScreen/MapScreen";
import CommentsScreen from "./Screens/nestedScreen/CommentsScreen";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={RegistrationScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
      </AuthStack.Navigator>
    );
  } else {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="MainTab"
          component={MainTabScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Map"
          component={MapScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="Comments"
          component={CommentsScreen}
        />
      </AuthStack.Navigator>
    );
  }
};

const MainTabScreen = () => {
  return (
    <MainTab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <View
              style={{
                backgroundColor: "#FF6C00",
                borderRadius: 50,
                paddingLeft: 29,
                paddingRight: 29,
                paddingBottom: 13,
                paddingTop: 13,
              }}
            >
              <Octicons name="plus" size={24} color="#fff" />
            </View>
          ),
        }}
        name="CreatePost"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
