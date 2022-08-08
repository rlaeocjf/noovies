import React, { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import {
  DeviceEventEmitter,
  NativeAppEventEmitter,
  Platform,
} from "react-native";
import BackgroundTimer from "react-native-background-timer";
import { Audio } from "expo-av";
import { useNavigation } from "@react-navigation/native";

const Timer = () => {
  // const [sound, setSound] = useState();
  const [timer, setTimer] = useState();

  // const playSound = async () => {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../assets/bigbang.mp3")
  //   );
  //   setSound(sound);
  //   console.log("Playing Sound");
  //   await sound.playAsync();
  // };

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  // const EventEmitter = Platform.select({
  //   ios: () => NativeAppEventEmitter,
  //   android: () => DeviceEventEmitter,
  // })();

  const navigation = useNavigation();

  const setTime = () => {
    const timeout = BackgroundTimer.setTimeout(() => {
      navigation.navigate("Stack", {
        screen: "Alarm",
      });
    }, 3000);
    setTimer(timeout);
  };

  const clearTime = () => {
    BackgroundTimer.clearTimeout(timer);
  };

  return (
    <View>
      <Text>Timer</Text>
      <Button title="3초후에 노래 시작하기" color="#841584" onPress={setTime} />
      <Button title="clear" color="#841584" onPress={clearTime} />
    </View>
  );
};

export default Timer;
