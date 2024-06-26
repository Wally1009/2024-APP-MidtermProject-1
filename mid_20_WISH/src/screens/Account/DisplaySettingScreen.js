import { Dimensions } from "react-native";
import { Center, Box, Text, Pressable } from "@gluestack-ui/themed";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import Ionicon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { selectColorMode } from "../../Redux/accountSlice";
import { toggleColorMode } from "../../Redux/accountSlice";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedCenter = Animated.createAnimatedComponent(Center);
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedIonicon = Animated.createAnimatedComponent(Ionicon);

const WIDTH = Dimensions.get("window").width * 0.7;

const Colors = {
  dark: {
    background: "#1E1E1E",
    circle: "#252525",
    icon: "#000",
    text: "#F8F8F8",
  },
  light: {
    background: "#F8F8F8",
    circle: "#FFF",
    icon: "#F4F4F5",
    text: "#1E1E1E",
  },
};
const DisplaySettingScreen = () => {
    const colorMode = useSelector(selectColorMode);
    const dispatch = useDispatch();

    // const toggleColorMode = () => {
    //   const nextColorScheme = colorMode === "light" ? "dark" : "light";
    //   Appearance.setColorScheme(nextColorScheme);
    // };
  
    const progress = useDerivedValue(() => {
      return withTiming(colorMode === "dark" ? 1 : 0, { duration: 2000 });
    });
  
    const animatedStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        progress.value,
        [0, 1],
        [Colors.light.background, Colors.dark.background]
      );
      return {
        backgroundColor,
      };
    });
  
    const animatedCircleStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        progress.value,
        [0, 1],
        [Colors.light.circle, Colors.dark.circle]
      );
      return {
        backgroundColor,
      };
    });
  
    const animatedIconStyle = useAnimatedStyle(() => {
      const backgroundColor = interpolateColor(
        progress.value,
        [0, 1],
        [Colors.light.icon, Colors.dark.icon]
      );
      return {
        backgroundColor,
      };
    });
  
    const animatedTextStyle = useAnimatedStyle(() => {
      const color = interpolateColor(
        progress.value,
        [0, 1],
        [Colors.light.text, Colors.dark.text]
      );
      return {
        color,
      };
    });
  
    return (
      <AnimatedCenter flex={1} style={animatedStyle}>
        <AnimatedText
          fontSize={40}
          fontWeight={"700"}
          marginBottom={35}
          style={animatedTextStyle}
        >
          {colorMode == "light" ? "Light Mode" : "Dark Mode"}
        </AnimatedText>
        <AnimatedCenter
          w={WIDTH}
          h={WIDTH}
          borderRadius={WIDTH / 2}
          shadow="4"
          style={animatedCircleStyle}
        >
          <Pressable onPress={() => dispatch(toggleColorMode())}>
            <AnimatedBox borderRadius={40} style={animatedIconStyle}>
              <AnimatedIonicon
                name={colorMode == "dark" ? "moon-outline" : "sunny-outline"}
                size={40}
                style={animatedTextStyle}
              />
            </AnimatedBox>
          </Pressable>
        </AnimatedCenter>
      </AnimatedCenter>
    );
};

export default DisplaySettingScreen;