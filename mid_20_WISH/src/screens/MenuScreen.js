import React,{useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Box, Center, Text } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native';
import Men_PerfumeScreen from './Men_PerfumeScreen';

const MenuScreen = () => {
    const[selectedIndex, setSelectedIndex] = useState(0);
    const navigation=useNavigation();

    const onTabPress=(index)=>{
        setSelectedIndex(index);
    };
    const SegmentedContent = () => {
        if(selectedIndex===0||selectedIndex===1){
        return (
            <Center flex={1} >
                <Text style={{ fontSize:20, color:"#000000", margin:15 }}>Jacket</Text>
                <Text style={{ fontSize:20, color:"#000000", margin:15 }}>T-shirt</Text>
                <Text style={{ fontSize:20, color:"#000000", margin:15 }}>Pants</Text>
                <Text style={{ fontSize:20, color:"#000000", margin:15 }} onPress={()=>OptionPress('Perfume')}>Perfume</Text>
            </Center>
        )
        
    }
    }
    const OptionPress=(option)=>{
        if(selectedIndex===1&&option==='Perfume'){
            navigation.navigate('Men_PerfumeScreen')
        }
    }
    
    return(          
        <Box flex={1}>
            <SegmentedControlTab
                values={["Women", "Men", "Fashion", "Rupert"]}
                tabStyle={{
                    backgroundColor:"#FFFFFF",
                    borderWidth:0,
                    borderRadius:0,
                    borderBottomWidth:3,
                    borderColor:"#000000",
                }}
                activeTabStyle={{
                    backgroundColor: "#FFFFFF", 
                }}
                activeTabTextStyle={{
                    color:"#000000",
                    fontWeight:"bold",
                    fontSize:24
                }}
                tabTextStyle={{
                    color:"#000000",
                    fontSize:20,
                    padding: 5
                }}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIndex(index)}
            />
            <SegmentedContent />
        </Box>
    );
};

export default MenuScreen;