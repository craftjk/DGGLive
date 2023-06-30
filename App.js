import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistGate } from "redux-persist/integration/react";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { NavigationContainer } from "@react-navigation/native";

import MainTabs from "./navigation/MainTabs";
import LoadingScreen from "./screens/LoadingScreen";
import settingsReducer from "./store/reducers/settings";

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [isLoading, setLoading] = useState(true);

  // Simulate an async operation (e.g., API call, DB read/write, etc.)
  // In a real application, replace this with your async operation.
  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
      setLoading(false); // Set loading to false when the operation is complete
    };

    loadData();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  );
}
