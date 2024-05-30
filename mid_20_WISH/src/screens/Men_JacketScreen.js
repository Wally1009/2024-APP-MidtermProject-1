import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Men_JacketList from "../components/Men_JacketList";
import MenJacketData from "../json/Men_Jacket.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const Men_JacketScreen = () => {
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
            <Men_JacketList MenJacketList={MenJacketData} />
        </Box>
    );
};

export default Men_JacketScreen;
