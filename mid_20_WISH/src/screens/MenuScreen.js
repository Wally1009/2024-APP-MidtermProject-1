import React, { useState } from 'react';
import { Box, Center, Text } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import Men_PerfumeScreen from './Men_PerfumeScreen';
import Men_JacketScreen from './Men_JacketScreen';
import Men_PantsScreen from './Men_PantsScreen';
import Men_TshirtScreen from './Men_TshirtScreen';

import Women_JacketScreen from './Women_JacketScreen';
import Women_PantsScreen from './Women_PantsScreen';
import Women_TshirtScreen from './Women_TshirtScreen';
import Women_PerfumeScreen from './Women_PerfumeScreen';
import FashionScreen from './Fashion/FashionScreen';
import SegmentedControlTab from 'react-native-segmented-control-tab';


const MenuScreen = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigation = useNavigation();

    const onTabPress = (index) => {
        setSelectedIndex(index);
    };

    const renderContent = () => {
        switch (selectedIndex) {
            case 0:
                
            case 1:
                return (
                    <Center flex={1}>
                        <Text style={{ fontSize: 20, color: "#000000", margin: 15 }} onPress={() => OptionPress('Jacket')}>Jacket</Text>
                        <Text style={{ fontSize: 20, color: "#000000", margin: 15 }} onPress={() => OptionPress('Tshirt')}>T-shirt</Text>
                        <Text style={{ fontSize: 20, color: "#000000", margin: 15 }} onPress={() => OptionPress('Pants')}>Pants</Text>
                        <Text style={{ fontSize: 20, color: "#000000", margin: 15 }} onPress={() => OptionPress('Perfume')}>Perfume</Text>
                    </Center>
                );
            case 2:
                return <FashionScreen/>; // 添加 Fashion 内容
            case 3:
                return <Text>Rupert Content</Text>; // 添加 Rupert 内容
            default:
                return null;
        }
    };

    const OptionPress = (option) => {
        if (selectedIndex === 1 && option === 'Perfume') {
            navigation.navigate('Men_PerfumeScreen');
        } else if (selectedIndex === 1 && option === 'Jacket') {
            navigation.navigate('Men_JacketScreen');
        } else if (selectedIndex === 1 && option === 'Pants') {
            navigation.navigate('Men_PantsScreen');
        } else if (selectedIndex === 1 && option === 'Tshirt') {
            navigation.navigate('Men_TshirtScreen');
        }else if (selectedIndex === 0 && option === 'Jacket') {
            navigation.navigate('Women_JacketScreen');
        }else if (selectedIndex === 0 && option === 'Tshirt') {
            navigation.navigate('Women_TshirtScreen');
        }else if (selectedIndex === 0 && option === 'Pants') {
            navigation.navigate('Women_PantsScreen');
        }else if (selectedIndex === 0 && option === 'Perfume') {
            navigation.navigate('Women_PerfumeScreen');
        }
    };

    return (
        <Box flex={1}>
            <SegmentedControlTab
                values={["Women", "Men", "Fashion", "Rupert"]}
                tabStyle={{
                    backgroundColor: "#FFFFFF",
                    borderWidth: 0,
                    borderRadius: 0,
                    borderBottomWidth: 3,
                    borderColor: "#000000",
                }}
                activeTabStyle={{
                    backgroundColor: "#FFFFFF",
                }}
                activeTabTextStyle={{
                    color: "#000000",
                    fontWeight: "bold",
                    fontSize: 24
                }}
                tabTextStyle={{
                    color: "#000000",
                    fontSize: 20,
                    padding: 5
                }}
                selectedIndex={selectedIndex}
                onTabPress={onTabPress}
            />
            {renderContent()}
        </Box>
    );
};

export default MenuScreen;
