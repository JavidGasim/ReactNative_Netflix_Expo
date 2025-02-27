import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import Constants from "expo-constants";

const IP_URL = Constants.expoConfig.extra.IP_URL;

const Index = () => {
  const logout = async () => {
    try {
      const response = await fetch(`${IP_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        await AsyncStorage.setItem("token", "");
        router.push("/auth/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ margin: "auto" }}>
      <TouchableOpacity
        onPress={logout}
        style={{
          backgroundColor: "red",
          borderRadius: 10,
          // paddingVertical: 10,
          // marginTop: 20,
          padding: 20,
        }}
        className="bg-red-600 w-full"
      >
        <Text className="text-center text-white">Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
