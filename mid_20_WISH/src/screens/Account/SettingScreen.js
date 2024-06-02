import React from "react";
import { StyleSheet } from "react-native";
import { Center, Button, ButtonText, Box, Text } from "@gluestack-ui/themed";
import ListItem from "../../components/ListItem"
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/accountSlice"

const SettingsScreen = () => {
  const dispatch = useDispatch();
  return (
    <Box mt="$1">
      <Text style={styles.personal}>個人</Text>

      <ListItem title="個人資料" destination="Personal" />
      <ListItem title="設置" destination="DisplaySetting" />
      
      <Center>
        <Button 
          style={{marginTop:200}} 
          w="90%" 
          action="secondary"
          variant='outline'
          borderColor='#000000'
          borderRadius={0}
          onPress={() => {
            dispatch(logout());
          }}  
        >
          <ButtonText style={{fontFamily:"Roboto",fontWeight:'bold',color:'#000000',fontSize:14}}>
            登出
          </ButtonText>
        </Button>        
      </Center>

    </Box>
  );
};

const styles = StyleSheet.create({
  personal:{
    fontFamily:"Roboto",
    fontSize:32,
    fontWeight:'bold',
    marginLeft:25,
    marginTop:20,
    marginBottom:20,
    color:'#000000'
},
})

export default SettingsScreen;