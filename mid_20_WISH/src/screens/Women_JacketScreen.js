import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Women_JacketList from "../components/Women_JacketList";
import WomenJacketData from "../json/Women_Jacket.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const Women_JacketScreen = () => {
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
            <Women_JacketList WomenJacketList={WomenJacketData} />
        </Box>
    );
};

export default Women_JacketScreen;
