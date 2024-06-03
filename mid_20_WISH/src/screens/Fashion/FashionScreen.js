import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import FashionList from '../../components/Fashion/FashionList';
import FashionData from "../../json/Fashion.json";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { selectColorMode } from "../../Redux/accountSlice";

const FashionScreen = () => {
    const navigation = useNavigation();
    const colorMode = useSelector(selectColorMode);
    const backgroundMode = colorMode == 'light' ? 'white' : 'black'
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
