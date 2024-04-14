import React,{useState} from 'react';
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from "../components/Header"
import {
    FormControl,
    VStack,
    Text,
    Input,
    InputField,
    Button
  } from "@gluestack-ui/themed";

const AccountScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    console.log(email, password);
    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Header/>
                <VStack space={2} mt={30} width="80%" alignSelf="center">
                    <Text style={styles.wish}>
                        WISH
                    </Text>
                    <Text style={styles.text}>登入您的帳戶</Text>
    
                    <FormControl mt={10} isRequired>
                        <Input variant="underlined">
                            <InputField 
                                placeholder="電子郵件"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </Input>
                    </FormControl>
                    <FormControl mt={25} isRequired>
                        <Input variant="underlined">
                            <InputField 
                                placeholder="密碼"
                                value={password} 
                                onChangeText={(text) => setPassword(text)}
                            />
                        </Input>
                    </FormControl>
                    <Button 
                        style={styles.button} 
                        variant='outline'
                        borderColor='#000000'
                        borderRadius={0}
                    >
                        <Text style={{fontFamily:"Roboto",fontWeight:'bold',color:'#000000',fontSize:14}}>
                            登入
                        </Text>
                    </Button>
                    <Text style={{fontFamily:"Roboto",color:'#909090',fontSize:12,marginTop:10,letterSpacing:1}}>
                        忘記密碼？
                    </Text>
                    <Text style={{fontFamily:"Roboto",fontWeight:'bold',color:'#000000',fontSize:16,marginTop:45,letterSpacing:1}}>
                        需要一個帳戶？
                    </Text>
                    <Button 
                        style={styles.button} 
                        variant='outline'
                        borderColor='#000000'
                        borderRadius={0}
                    >
                        <Text style={{fontFamily:"Roboto",fontWeight:'bold',color:'#000000',fontSize:14}}>
                            註冊
                        </Text>
                    </Button>
                </VStack>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    wish:{
        fontFamily:"Roboto",
        fontStyle:'italic',
        fontSize:48,
        letterSpacing:5,
        textAlign:'center',
        color:'#000000',
    },
    text:{
        fontFamily:"Roboto",
        fontWeight:'bold',
        color:'#000000',
        fontSize:16,
        marginTop:15,
        marginBottom:20,
        letterSpacing:1,
    },
    button:{
        marginTop:40
    },
})

export default AccountScreen;