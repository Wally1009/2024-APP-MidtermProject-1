import React, { useState, useEffect } from "react";
import { Center, Box, Text, Pressable, } from "@gluestack-ui/themed";
import { Image, View, TouchableOpacity, StyleSheet, FlatList, Appearance, Dimensions, useColorScheme } from "react-native";
import { useNavigation } from "react-router-dom";
import WomenJacketData from "../json/Women_Jacket.json";
import SearchBar from "../components/SearchBar";
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useDerivedValue,
    withTiming,
  } from "react-native-reanimated";
import Ionicon from "react-native-vector-icons/Ionicons";

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


const SearchScreen = ({item}) => {
    const colorScheme = useColorScheme();

    const toggleColorMode = () => {
      const nextColorScheme = colorScheme === "light" ? "dark" : "light";
      Appearance.setColorScheme(nextColorScheme);
    };
  
    const progress = useDerivedValue(() => {
      return withTiming(colorScheme === "dark" ? 1 : 0, { duration: 2000 });
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


    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(WomenJacketData.data);

    const handleSearch = (text) => {
        if(text){
            const filtered = WomenJacketData.data.filter((product) =>
                product.name.toLowerCase().includes(text.toLowerCase())
            );

            setFilteredProducts(filtered);
        }
        else{
            setFilteredProducts(WomenJacketData.data)
        }
    };

    return(
        <AnimatedCenter flex={1} style={animatedStyle}>
        <AnimatedText
          fontSize={70}
          fontWeight={"700"}
          letterSpacing={14}
          marginBottom={35}
          style={animatedTextStyle}
        >
          THEME
        </AnimatedText>
        <AnimatedCenter
          w={WIDTH}
          h={WIDTH}
          borderRadius={WIDTH / 2}
          shadow="4"
          style={animatedCircleStyle}
        >
          <Pressable onPress={toggleColorMode}>
            <AnimatedBox borderRadius={40} style={animatedIconStyle}>
              <AnimatedIonicon
                name={colorScheme == "dark" ? "moon-outline" : "sunny-outline"}
                size={40}
                style={animatedTextStyle}
              />
            </AnimatedBox>
          </Pressable>
        </AnimatedCenter>
      </AnimatedCenter>
    // <Box style={{flex: 1}}>
    //     <SearchBar onSearch={handleSearch} />
    //     <FlatList
    //         data={WomenJacketData.jacket}
    //         keyExtractor={(item) => item.key}
    //         renderItem={(item) => (
    //             <View style={styles.productItem}>
    //                 <Text style={styles.productName}>{item.title}</Text>
    //                 <Text style={styles.productPrice}>{item.money}</Text>
    //             </View>
                
    //         )}
    //     />
    // </Box>
    )
};



const styles = StyleSheet.create({
    productItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    productName: {
        fontSize: 18,
    },
    productPrice: {
        fontSize: 16,
        color: '#888',
    },
})
export default SearchScreen;
