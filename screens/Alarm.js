import React, { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import { Audio } from "expo-av";

const Alarm = () => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/bigbang.mp3")
    );
    setSound(sound);
    console.log("Playing Sound");
    sound.setIsLoopingAsync(true);
    await sound.playAsync();
  };

  useEffect(() => {
    playSound();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Text>알람화면</Text>
    </View>
  );
};

export default Alarm;
