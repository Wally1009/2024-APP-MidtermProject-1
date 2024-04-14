import React from "react";
import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen = () => {
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text style={{ textAlign: "center" }}>this is Search</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default SearchScreen;