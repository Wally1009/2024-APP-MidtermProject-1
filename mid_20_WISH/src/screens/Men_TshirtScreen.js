import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Men_TshirtList from "../components/Men_TshirtList";
import MenTshirtData from "../json/Men_Tshirt.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const Men_TshirtScreen = () => {
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
            <Men_TshirtList MenTshirtList={MenTshirtData} />
        </Box>
    );
};

export default Men_TshirtScreen;
