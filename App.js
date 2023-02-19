import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { auth, db } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => setUser(user)); 

  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}

