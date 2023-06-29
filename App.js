import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./navigation/MainTabs";
import LoadingScreen from "./screens/LoadingScreen";

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
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
