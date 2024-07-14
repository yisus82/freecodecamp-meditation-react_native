import AppGradient from "@/components/AppGradient";
import Button from "@/components/Button";
import COLORS from "@/constants/Colors";
import { TimerContext } from "@/context/TimerContext";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1">
      <AppGradient colors={[COLORS.meditate1, COLORS.meditate2, COLORS.meditate3]}>
        <Pressable onPress={() => router.back()}>
          <AntDesign name='leftcircleo' size={50} color='white' />
        </Pressable>
        <View className="flex-1 justify-start items-center mt-10">
          <Text className="font-bold text-2xl text-white mb-5">
            Adjust meditation duration
          </Text>
          <View className="w-full">
            <Button
              text="1 minute"
              onPress={() => handlePress(1 * 60)}
              buttonAdditionalClassNames="mb-5"
            />
            <Button
              text="5 minutes"
              onPress={() => handlePress(5 * 60)}
              buttonAdditionalClassNames="mb-5"
            />
            <Button
              text="10 minutes"
              onPress={() => handlePress(10 * 60)}
              buttonAdditionalClassNames="mb-5"
            />
            <Button
              text="15 minutes"
              onPress={() => handlePress(15 * 60)}
              buttonAdditionalClassNames="mb-5"
            />
            <Button
              text="20 minutes"
              onPress={() => handlePress(20 * 60)}
              buttonAdditionalClassNames="mb-5"
            />
            <Button
              text="30 minutes"
              onPress={() => handlePress(30 * 60)}
              buttonAdditionalClassNames="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;