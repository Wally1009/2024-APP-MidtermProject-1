import React,{useState} from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Box, Center, Text } from '@gluestack-ui/themed'

const MenuScreen = () => {
    const[selectedIndex, setSelectedIndex] = useState(0);
  
    const SegmentedContent = () => {
        return (
            <Center flex={1} >
                <Text style={{ fontSize:20, color:"#000000", margin:15 }}>Jacket</Text>
                <Text style={{ fontSize:20, color:"#000000", margin:15 }}>T-shirt</Text>
                <Text style={{ fontSize:20, color:"#000000", margin:15 }}>Pants</Text>
                <Text style={{ fontSize:20, color:"#000000", margin:15 }}>Perfume</Text>
            </Center>
        )
        
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