import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Men_PerfumeList from "../components/Men_PerfumeList";
import MenPerfumeData from "../json/Men_Perfume.json";
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

const Men_PerfumeScreen = () => {
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
            <Men_PerfumeList MenPerfumeList={MenPerfumeData} />
        </Box>
    );
};

export default Men_PerfumeScreen;
