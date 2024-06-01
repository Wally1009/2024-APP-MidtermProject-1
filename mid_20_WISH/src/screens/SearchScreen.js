import React, { useState, useEffect } from "react";
import { Box, Text } from "@gluestack-ui/themed";
import { View, TouchableOpacity, StyleSheet, FlatList, Pressable } from "react-native";
import { Image } from "react-native";

import { useNavigation } from "react-router-dom";
import WomenJacketData from "../json/Women_Jacket.json";
import SearchBar from "../components/SearchBar";


const SearchScreen = ({item}) => {
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
        <Box style={{flex: 1}}>
            <SearchBar onSearch={handleSearch} />
            <FlatList
                data={WomenJacketData.jacket}
                keyExtractor={(item) => item.key}
                renderItem={(item) => (
                    <View style={styles.productItem}>
                        <Text style={styles.productName}>{item.title}</Text>
                        <Text style={styles.productPrice}>{item.money}</Text>
                    </View>
                    
                )}
            />
        </Box>
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
