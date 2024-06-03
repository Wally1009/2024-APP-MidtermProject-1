import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Image, Pressable } from "react-native";
import { Box, Center, Text } from '@gluestack-ui/themed';
import { useCart } from '../Context/CartContext';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeartWhiteImg from '../../src/img/heart-plus-outline (1).png';
import HeartBlackImg from '../../src/img/heart-plus-outline-black.png';
import { useFavorites } from '../Context/FavoriteContext';
import { useSelector } from "react-redux";
import { selectColorMode } from "../Redux/accountSlice";


const ShoppingCartScreen = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const colorMode = useSelector(selectColorMode);
    const backgroundMode = colorMode == 'light' ? 'white' : 'black'
    const textMode = colorMode == 'light' ? 'black' : 'white'
    const iconMode = colorMode == 'light' ? 'black' : 'white'

    useEffect(() => {
        // 重新渲染購物車畫面時的操作
        // 這裡可以添加任何你需要的邏輯，例如更新購物車內容或發送 API 請求等
    }, [isFocused]);

    const handleIncreaseQuantity = (item) => {
        addToCart(item);
    };

    const handleDecreaseQuantity = (item) => {
        removeFromCart(item);
    };
    const toggleHeartIcon = (item) => {
        if (favorites.includes(item.key)) {
            removeFavorite(item.key);
        } else {
            addFavorite(item.key);
        }
    };
    const navigationToDetail = (item) => {
        if (item.type === 'MenPerfume') {
            navigation.navigate('Men_PerfumeDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }
        else if(item.type === 'MenJacket') {
            navigation.navigate('Men_JacketDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }
        else if(item.type === 'MenPants') {
            navigation.navigate('Men_PantsDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }
        else if(item.type === 'MenTshirt') {
            navigation.navigate('Men_TshirtDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }
        else if(item.type === 'WomenJacket') {
            navigation.navigate('Women_JacketDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }
        else if(item.type === 'WomenTshirt') {
            navigation.navigate('Women_TshirtDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }else if(item.type === 'WomenPants') {
            navigation.navigate('Women_PantsDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }else if(item.type === 'WomenPerfume') {
            navigation.navigate('Women_PerfumeDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }else if(item.type === 'Fashion') {
            navigation.navigate('FashionDetailScreen', {
                title: item.title,
                money: item.money,
                key: item.key,
                descriptions: item.descriptions,
                image: item.image,
            });
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Pressable onPress={() => navigationToDetail(item)}>
                <Image source={item.image} style={styles.image} />
            </Pressable>
            <View style={styles.infoContainer}>
                <Text style={styles.title} color={textMode}>{item.title}</Text>
                <Text style={styles.money} color={textMode}>{item.money}</Text>
                <View style={styles.infoContainer} color={iconMode}>
                    <Pressable onPress={()=>toggleHeartIcon(item)} >
                        <Image
                            source={favorites.includes(item.key)?HeartBlackImg:HeartWhiteImg}
                            style={styles.icon}
                            
                        />
                    </Pressable>
                </View>
                
                <View style={styles.quantityContainer} >
                    <Pressable onPress={() => handleDecreaseQuantity(item)}>
                        <MaterialCommunityIcons name="minus" size={24} style={styles.quantityButton} color={iconMode}/>
                    </Pressable>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <Pressable onPress={() => handleIncreaseQuantity(item)}>
                        <MaterialCommunityIcons name="plus" size={24} style={styles.quantityButton} color={iconMode}/>
                    </Pressable>
                </View>
            </View>
        </View>
    );

    return (
        <Box style={styles.container} bg={backgroundMode}>
            <Text style={styles.cart} color={textMode}>購物車</Text>
            {cartItems.length === 0 ? (
                <Center style={{ top: 170 }}>   
                    <MaterialCommunityIcons name='cart-plus' size={24} styles={styles.cartplus} color={iconMode}/>
                    <Box>
                        <Center>
                            <Text style={styles.text} color={textMode}>您的購物車是空的</Text>
                            <Text style={styles.text} color={textMode}>添加商品到購物車吧</Text>
                        </Center>
                    </Box>
                </Center>
            ) : (
                <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.key.toString()}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </Box>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    icon:{
        width: 15,
        height: 14,
        marginTop:-10,
        marginLeft:0,
        marginHorizontal: 5,
    },
    secondIcon: {
        marginLeft: 0,
    },
    cart: {
        fontFamily: "Roboto",
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        marginBottom:20,
        
    },
    cartplus: {
        marginBottom: 40,
        position: 'relative',
    },
    text: {
        fontFamily: "Roboto",
        marginTop: 25
    },
    quantity: {
        fontFamily: "Roboto",
        fontSize: 14,
        marginTop: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 2,
    },
    image: {
        width: 140,
        height: 200,
        marginRight: 18,
        marginTop:30,
        marginLeft:21
    },
    infoContainer: {
        flex: 1,
        marginBottom:12,
        marginTop:33,
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 13,
        fontWeight: 'bold',
    },
    money: {
        fontFamily: "Roboto",
        fontSize: 12,
        marginTop:13
    },
    quantityContainer: {
        position:'absolute',
        right:10,
        top:170,
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        color: '#000',
        paddingHorizontal: 10,
        fontSize:25
    },
});

export default ShoppingCartScreen;
