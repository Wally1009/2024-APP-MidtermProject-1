import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Women_PantsList from "../components/Women_PantsList";
import WomenPantsData from "../json/Women_Pants.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const Women_PantsScreen = () => {
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
            <Women_PantsList WomenPantsList={WomenPantsData} />
        </Box>
    );
};

export default Women_PantsScreen;
