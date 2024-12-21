import { SafeAreaView, StatusBar } from "react-native";
import React from "react";

const MyStatusBar = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#38B2AC',  }}>
      <StatusBar
        backgroundColor={"#38B2AC"}
        barStyle={"light-content"}
      />
    </SafeAreaView>
  );
};

export default MyStatusBar;