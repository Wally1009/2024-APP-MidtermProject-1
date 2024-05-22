import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Box, VStack, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useFavorites } from '../Context/FavoriteContext';

import img0 from '../../src/Men_Perfume_img/image CKK Perfume.png';
import img1 from '../../src/Men_Perfume_img/image HERO Perfume.png';
import img2 from '../../src/Men_Perfume_img/image Dior曠野之心.png';
import img3 from '../../src/Men_Perfume_img/image Fire Perfume.png';
import img4 from '../../src/Men_Perfume_img/image Fahrenheit.png';
import img5 from '../../src/Men_Perfume_img/image Homme.png';
import img6 from '../../src/img/cart-plus (1).png';
import img7 from '../../src/img/heart-plus-outline (1).png';
import img8 from '../../src/img/heart-plus-outline-black.png';

const MenPerfumeimgs = [img0, img1, img2, img3, img4, img5];
const selectclothesicon = [img6, img7];

const Men_PerfumeDetail = ({ MenPerfumeDetail, index }) => {
    const { navigate } = useNavigation();
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isLastTwo = index >= MenPerfumeimgs.length - 2;
    const isFavorite = favorites.includes(MenPerfumeDetail.key);

    const toggleHeartIcon = () => {
        if (isFavorite) {
            removeFavorite(MenPerfumeDetail.key);
        } else {
            addFavorite(MenPerfumeDetail.key);
        }
    };

    return (
        <Box p={10} marginX={1} marginBottom={2} borderRadius={3} shadow={2} position="relative" style={styles.container}>
            <VStack bg="#fff">
                <Pressable onPress={() => navigate('Detail', MenPerfumeDetail)} style={[styles.pressable, isLastTwo && styles.lastTwo]}>
                    <Image source={MenPerfumeimgs[MenPerfumeDetail.key]} style={{ width: 140, height: 200 }} />
                </Pressable>
                <VStack paddingLeft={2}>
                    <Text bold style={styles.title}>{MenPerfumeDetail.title}</Text>
                    <Text style={styles.money}>{MenPerfumeDetail.money}</Text>
                </VStack>
                <View style={styles.iconContainer}>
                    <Image source={selectclothesicon[0]} style={styles.icon} />
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
        marginTop: 5,
        marginBottom: 5,
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

export default Men_PerfumeDetail;
