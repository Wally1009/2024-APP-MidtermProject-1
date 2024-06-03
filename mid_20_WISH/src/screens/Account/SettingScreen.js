import React from "react";
import { StyleSheet } from "react-native";
import { Center, Button, ButtonText, Box, Text } from "@gluestack-ui/themed";
import ListItem from "../../components/ListItem"
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/accountSlice"
import { useSelector } from "react-redux";
import { selectColorMode } from "../../Redux/accountSlice";

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const colorMode = useSelector(selectColorMode);
  const backgroundMode = colorMode == 'light' ? 'white' : 'black'
  const textMode = colorMode == 'light' ? 'black' : 'white'
  return (
    <Box mt="$1" bg={backgroundMode} style={styles.container}>
      <Text style={styles.personal} color={textMode}>個人</Text>

      <ListItem title="個人資料" destination="Personal" />
      <ListItem title="設置" destination="DisplaySetting" />
      
      <Center>
        <Button 
          style={{marginTop:200}} 
          w="90%" 
          action="secondary"
          variant='outline'
          borderColor={textMode}
          borderRadius={0}
          onPress={() => {
            dispatch(logout());
          }}
          color={backgroundMode}  
        >
          <ButtonText style={{fontFamily:"Roboto",fontWeight:'bold',fontSize:14}} color={textMode}>
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
  },
  container:{
    flex: 1,
  },
})

export default SettingsScreen;