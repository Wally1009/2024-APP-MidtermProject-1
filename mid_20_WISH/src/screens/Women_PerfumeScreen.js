import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Women_PerfumeList from "../components/Women_PerfumeList";
import WomenPerfumeData from "../json/Women_Perfume.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const Women_PerfumeScreen = () => {
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
            <Women_PerfumeList WomenPerfumeList={WomenPerfumeData} />
        </Box>
    );
};

export default Women_PerfumeScreen;
