import React, { useState } from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
        onSearch(text);
    };
    const animation = useSharedValue(0);
    const [value, setValue] = useState(0);
    const animatedStyle = useAnimatedStyle(() => {
        return{
            width:
                animation.value == 1 
                 ? withTiming(0, {duration: 500})
                 : withTiming(300, {duration: 500}),
        };
    });
    return(
        <Box style={{flex: 1, justifyContent:'flex-start',alignItems:'center', marginTop:20}}>
            <Animated.View
                style={[
                {
                    width:300, 
                    height:50, 
                    backgroundColor:'#E7E7E7',
                    borderRadius: 20,
                    flexDirection: 'row',
                    alignItems:'center'
                },
                animatedStyle,
                ]}>
                <TextInput 
                    style={{width:'85%'}} 
                    placeholder="搜尋..." 
                    placeholderTextColor={'#6B6B6B'} 
                    value={searchText}
                    onChangeText={handleSearch}
                />
                <TouchableOpacity
                    onPress={() =>{
                        if(animation.value == 1){
                            animation.value = 0;
                            setValue(0);
                        }else{
                            animation.value = 1;
                            setValue(1);
                        }
                    }}
                >
                    <Image
                        source={
                            value == 1 
                            ? require('../img/magnify_2.png')
                            : require('../img/close.png')
                        }
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </Animated.View>
        </Box>   
    );
};

const styles = StyleSheet.create({
    icon:{
        width:30,
        height:30,
    }
})
export default SearchBar;