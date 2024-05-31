import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, Alert } from 'react-native';
import { Center, Box, Button, ButtonText, VStack, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from '@react-navigation/native';
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
const plusclothesicon = [img6, img7];

const FashionDetailScreen = ({ route }) => {
    const { title, money, key, descriptions } = route.params;
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isFavorite = favorites.includes(key);
    const [isPressed, setIsPressed] = useState(false);
    const { addToCart } = useCart();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: { display: 'none' },
        });

        return () => {
            navigation.getParent()?.setOptions({
                tabBarStyle: { display: 'flex' },
            });
        };
    }, [navigation]);

    const toggleHeartIcon = () => {
        if (isFavorite) {
            removeFavorite(key);
        } else {
            addFavorite(key);
        }
    };

    const handleAddToCart = () => {
        addToCart({ title, money, key, descriptions, image: Fashionimgs[key], type: 'Fashion' });
        Alert.alert('好薛', `${title} 已成功添加到購物車`);
    };

    return (
        <Center backgroundColor='#fff'>
            <VStack>
                <Center pt={50} pb={20}>
                    <Image
                        style={{ width: 221, height: 316 }}
                        source={Fashionimgs[key]}
                    />
                </Center>

                <Box pt={10} pb={10}>
                    <Center>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.descriptions}>{descriptions}</Text>
                    </Center>
                </Box>
                <Center paddingBottom={110}>
                    <Button
                        width={400}
                        height={60}
                        bgColor='black'
                        onPress={() => null}
                        style={{ position: 'absolute', bottom: 0 }}
                    >
                        <ButtonText position="absolute" left={20} top={10}>
                            <Text style={styles.clothesname}>{title}</Text>
                            {"\n"}
                            <Text style={styles.clothesname}>{money}</Text>
                        </ButtonText>
                        <View style={styles.iconContainer}>
                            <Pressable 
                                onPress={() => {
                                    handleAddToCart();
                                    setIsPressed(true);
                                }}
                                onPressOut={() => setIsPressed(false)}
                                style={[styles.iconWrapper, isPressed && styles.iconPressed]}
                            >
                                <Image source={plusclothesicon[0]} style={styles.icon} />
                            </Pressable>
                            <Pressable onPress={toggleHeartIcon}>
                                <Image source={isFavorite ? img8 : img7} style={[styles.icon, styles.secondIcon]} />
                            </Pressable>
                        </View>
                    </Button>
                </Center>
            </VStack>
        </Center>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 2,
        color:'pink'
    },
    clothesname: {
        fontFamily: "Roboto",
        fontSize: 15,
        textAlign: 'left',
        color:'pink'
    },
    money: {
        fontFamily: "Roboto",
        fontSize: 14,
        paddingTop: 10,
        paddingBottom: 10,
        color:'pink'
    },
    rate: {
        paddingLeft: 10
    },
    descriptions: {
        width: 320,
        textAlign: "center",
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 24,
        paddingBottom: 30,
        marginTop: 50,
        color: 'pink'
    },
    buy_content: {
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 16,
        paddingBottom: 30,
        fontWeight: 500
    },
    icon: {
        width: 24,
        height: 24,
        marginHorizontal: 30,
    },
    secondIcon: {
        marginLeft: 0,
    },
    iconContainer: {
        position: "absolute",
        bottom: 21,
        right: 10,
        flexDirection: "row",
    },
    iconWrapper: {
        borderRadius: 12,
    },
    iconPressed: {
        backgroundColor: 'gray',
    }
});

export default FashionDetailScreen;
