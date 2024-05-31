import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Women_TshirtList from "../components/Women_TshirtList";
import WomenTshirtData from "../json/Women_Tshirt.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const Women_TshirtScreen = () => {
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

    return (
        <Box style={{ backgroundColor: "#fff", flex: 1, paddingBottom: 20 }}>
            <Women_TshirtList WomenTshirtList={WomenTshirtData} />
        </Box>
    );
};

export default Women_TshirtScreen;
