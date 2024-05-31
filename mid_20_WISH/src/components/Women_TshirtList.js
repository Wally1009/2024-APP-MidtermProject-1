import React, { useState } from "react";
import { SectionList, Text, StyleSheet,FlatList } from "react-native";
import Women_TshirtDetail from "../components/Women_TshirtDetail";

const Women_TshirtList = ({ WomenTshirtList }) => {
    // 定义一个状态用于存储收藏夹中的商品
    const [favorites, setFavorites] = useState([]);

    // 定义一个函数来处理添加到收藏夹的逻辑
    const addToFavorites = (item) => {
        // 检查商品是否已经存在于收藏夹中
        if (!favorites.some((favorite) => favorite.title === item.title)) {
            // 如果不存在，则将商品添加到收藏夹中
            setFavorites([...favorites, item]);
        }
    };

    const renderSection = ({ section }) => (
        <>
            <Text style={styles.title}>{section.title}</Text>
            <FlatList
                data={section.data}
                renderItem={({ item }) => (
                    <Women_TshirtDetail 
                        WomenTshirtDetail={item} 
                        addToFavorites={addToFavorites} 
                    />
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.key}
                numColumns={2}
            />
        </>
    );

    const render = () => {
        return null;
    };

    return (
        <SectionList
            sections={WomenTshirtList}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSection}
            renderItem={render}
            keyExtractor={(item) => item.title}
        />
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 32,
        fontWeight: "bold",
        paddingLeft: 24,
        paddingTop: 40,
        paddingBottom: 30,
    },
});

export default Women_TshirtList;
