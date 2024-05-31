import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import FashionList from '../../components/Fashion/FashionList';
import FashionData from "../../json/Fashion.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const FashionScreen = () => {
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
            <FashionList FashionList={FashionData} />
        </Box>
    );
};

export default FashionScreen;
