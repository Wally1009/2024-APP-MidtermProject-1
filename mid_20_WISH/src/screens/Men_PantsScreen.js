import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Men_PantsList from "../components/Men_PantsList";
import MenPantsData from "../json/Men_Pants.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const Men_PantsScreen = () => {
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
            <Men_PantsList MenPantsList={MenPantsData} />
        </Box>
    );
};

export default Men_PantsScreen;
