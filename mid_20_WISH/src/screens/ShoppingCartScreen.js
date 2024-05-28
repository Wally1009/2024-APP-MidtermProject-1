import React, { useEffect } from 'react';
import { StyleSheet, View, FlatList, Image, Pressable } from "react-native";
import { Box, Center, Text } from '@gluestack-ui/themed';
import { useCart } from '../Context/CartContext';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShoppingCartScreen = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        // 重新渲染購物車畫面時的操作
        // 這裡可以添加任何你需要的邏輯，例如更新購物車內容或發送 API 請求等
    }, [isFocused]); // 當 isFocused 變化時觸發 useEffect

    const handleIncreaseQuantity = (item) => {
        addToCart({
            ...item,
            quantity: item.quantity + 1
        });
    };

    const handleDecreaseQuantity = (item) => {
        removeFromCart(item);
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
    }

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Pressable onPress={() => navigationToDetail(item)}>
                <Image source={item.image} style={styles.image} />
            </Pressable>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.money}>{item.money}</Text>
                <View style={styles.quantityContainer}>
                    <Pressable onPress={() => handleDecreaseQuantity(item)}>
                        <MaterialCommunityIcons name="minus" size={24} style={styles.quantityButton} />
                    </Pressable>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <Pressable onPress={() => handleIncreaseQuantity(item)}>
                        <MaterialCommunityIcons name="plus" size={24} style={styles.quantityButton} />
                    </Pressable>
                </View>
            </View>
        </View>
    );

    return (
        <Box>
            <Text style={styles.cart}>購物車</Text>
            {cartItems.length === 0 ? (
                <Center style={{ top: 170 }}>
                    <MaterialCommunityIcons name='cart-plus' size={24} styles={styles.cartplus} />
                    <Box>
                        <Center>
                            <Text style={styles.text}>您的購物車是空的</Text>
                            <Text style={styles.text}>添加商品到購物車吧</Text>
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
    cart: {
        fontFamily: "Roboto",
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20
    },
    cartplus: {
        marginBottom: 40,
        color: '#000',
        position: 'relative',
    },
    text: {
        fontFamily: "Roboto",
        color: '#909090',
        marginTop: 25
    },
    quantity: {
        fontFamily: "Roboto",
        fontSize: 14,
        marginTop: 5,
        color: '#555'
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
        marginRight: 10,
    },
    title: {
        fontFamily: "Roboto",
        fontSize: 16,
        fontWeight: 'bold',
    },
    money: {
        fontFamily: "Roboto",
        fontSize: 14,
        color: '#555',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        color: '#000',
        paddingHorizontal: 10,
    },
});

export default ShoppingCartScreen;
