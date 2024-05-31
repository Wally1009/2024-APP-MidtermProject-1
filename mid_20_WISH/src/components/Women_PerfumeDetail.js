import React,{useState} from 'react';
import { StyleSheet, Image, Text, View,Alert } from 'react-native';
import { Box, VStack, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from '../Context/FavoriteContext';
import { useCart } from '../Context/CartContext';

import img0 from '../../src/img/Women_Perfume_img/image 36.png';
import img1 from '../../src/img/Women_Perfume_img/image 58 (1).png';
import img2 from '../../src/img/Women_Perfume_img/image 59.png';
import img3 from '../../src/img/Women_Perfume_img/image 60.png';
import img4 from '../../src/img/Women_Perfume_img/image 61.png';
import img5 from '../../src/img/Women_Perfume_img/image 62.png';
import img6 from '../../src/img/cart-plus (1).png';
import img7 from '../../src/img/heart-plus-outline (1).png';
import img8 from '../../src/img/heart-plus-outline-black.png';

const WomenPerfumeimgs = [img0, img1, img2, img3, img4, img5];
const selectclothesicon = [img6, img7];

const Women_PerfumeDetail = ({ WomenPerfumeDetail, index }) => {
    const { navigate } = useNavigation();
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isLastTwo = index >= WomenPerfumeimgs.length - 2;
    const isFavorite = favorites.includes(WomenPerfumeDetail.key);
    const [isPressed,setIsPressed]=useState(false);
    const{addToCart}=useCart();

    const toggleHeartIcon = () => {
        if (isFavorite) {
            removeFavorite(WomenPerfumeDetail.key);
        } else {
            addFavorite(WomenPerfumeDetail.key);
        }
    };
    const handleAddToCart=()=>{
        addToCart({ title: WomenPerfumeDetail.title, money: WomenPerfumeDetail.money, key: WomenPerfumeDetail.key, descriptions: WomenPerfumeDetail.descriptions,image:WomenPerfumeimgs[WomenPerfumeDetail.key],type:'WomenPerfume' });
        Alert.alert('好薛',`${WomenPerfumeDetail.title} 已成功添加到購物車`);
      }

    return (
        <Box p={10} marginX={1} marginBottom={2} borderRadius={3} shadow={2} position="relative" style={styles.container}>
            <VStack bg="#fff">
                <Pressable onPress={() => navigate('Women_PerfumeDetailScreen', WomenPerfumeDetail)} style={[styles.pressable, isLastTwo && styles.lastTwo]}>
                    <Image source={WomenPerfumeimgs[WomenPerfumeDetail.key]} style={{ width: 140, height: 200 }} />
                </Pressable>
                <VStack paddingLeft={2}>
                    <Text bold style={styles.title}>{WomenPerfumeDetail.title}</Text>
                    <Text style={styles.money}>{WomenPerfumeDetail.money}</Text>
                </VStack>
                <View style={styles.iconContainer}>
                   <Pressable 
                      onPress={handleAddToCart}
                      onPressIn={() => setIsPressed(true)} 
                      onPressOut={() => setIsPressed(false)}
                      style={[styles.iconWrapper, isPressed && styles.iconPressed]}>
                   <Image source={selectclothesicon[0]} style={styles.icon} />
                   </Pressable>
                    
                    
                    <Pressable onPress={toggleHeartIcon}>
                        <Image
                            source={isFavorite ? img8 : img7}
                            style={[styles.icon, styles.secondIcon]}
                        />
                    </Pressable>
                </View>
            </VStack>
        </Box>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    pressable: {
        marginBottom: -10, // 調整其他商品的 marginBottom
    },
    lastTwo: {
        marginBottom: 40, // 最後兩個商品的 marginBottom
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 12,
        marginTop: 20,
        marginBottom: 5,
    },
    iconWrapper: {
        borderRadius: 12,
      },
    iconPressed: {
        backgroundColor: 'gray',
    },
    money: {
        fontFamily: "Roboto",
        fontSize: 12,
    },
    iconContainer: {
        position: "absolute",
        bottom: 21,
        right: -4,
        flexDirection: "row",
    },
    icon: {
        width: 11,
        height: 10,
        marginHorizontal: 5,
    },
    secondIcon: {
        marginLeft: 0,
    },
});

export default Women_PerfumeDetail;
