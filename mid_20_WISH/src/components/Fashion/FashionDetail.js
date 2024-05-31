import React,{useState} from 'react';
import { StyleSheet, Image, Text, View,Alert } from 'react-native';
import { Box, VStack, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from '../../Context/FavoriteContext';
import { useCart } from '../../Context/CartContext';

import img0 from '../../img/Barbie_img/image 23.png';
import img1 from '../../img/Barbie_img//image 25.png';
import img2 from '../../img/Barbie_img/image 18.png';
import img3 from '../../img/Barbie_img/image 24.png';
import img4 from '../../img/Barbie_img/image 19.png';
import img5 from '../../img/Barbie_img/image 17.png';
import img6 from '../../img/cart-plus-pink.png';
import img7 from '../../img/heart-plus-outline-pink.png';
import img8 from '../../img/heart-plus-pink.png';

const Fashionimgs = [img0, img1, img2, img3, img4, img5,img0, img1, img2, img3, img4, img5,img0, img1, img2, img3, img4, img5,img0, img1, img2, img3, img4, img5,img0, img1, img2, img3, img4, img5,img0, img1, img2, img3, img4, img5,img0, img1, img2, img3, img4, img5,img0, img1, img2, img3, img4, img5,img0, img1, img2, img3, img4, img5];
const selectclothesicon = [img6, img7];

const FashionDetail = ({ FashionDetail, index }) => {
    const { navigate } = useNavigation();
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isLastTwo = index >= Fashionimgs.length - 2;
    const isFavorite = favorites.includes(FashionDetail.key);
    const [isPressed,setIsPressed]=useState(false);
    const{addToCart}=useCart();

    const toggleHeartIcon = () => {
        if (isFavorite) {
            removeFavorite(FashionDetail.key);
        } else {
            addFavorite(FashionDetail.key);
        }
    };
    const handleAddToCart=()=>{
        addToCart({ title: FashionDetail.title, money: FashionDetail.money, key: FashionDetail.key, descriptions: FashionDetail.descriptions,image:Fashionimgs[FashionDetail.key],type:'Fashion' });
        Alert.alert('好薛',`${FashionDetail.title} 已成功添加到購物車`);
      }

    return (
        <Box p={10} marginX={1} marginBottom={2} borderRadius={3} shadow={2} position="relative" style={styles.container}>
            <VStack bg="#fff">
                <Pressable onPress={() => navigate('FashionDetailScreen', FashionDetail)} style={[styles.pressable, isLastTwo && styles.lastTwo]}>
                    <Image source={Fashionimgs[FashionDetail.key]} style={{ width: 140, height: 200 }} />
                </Pressable>
                <VStack paddingLeft={2}>
                    <Text bold style={styles.title}>{FashionDetail.title}</Text>
                    <Text style={styles.money}>{FashionDetail.money}</Text>
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
        color:'pink'
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
        color:'pink'
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

export default FashionDetail;
