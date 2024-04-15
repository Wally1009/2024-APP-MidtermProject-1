import React,{useState} from 'react';
import { StyleSheet } from "react-native";

import {
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
    AlertCircleIcon,
    FormControl,
    VStack,
    Text,
    Input,
    InputField,
    Button,
    Box
  } from "@gluestack-ui/themed";

const AccountScreen = () => {
    const [email, setEmail] = useState("");
    const [emailIsError, setEmailIsError] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordIsError, setpasswordIsError] = useState(true);

    console.log({email, emailIsError});
    const passwordRegex = /^[a-zA-Z]+\w*$/;
    const emailRegex = /w{3,}@[a-zA-Z]{2,5}(\.[a-zA-Z]{2,5}){1,}$/

    return(
        <Box>
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
                            onChangeText={(text) => {
                                setEmail(text);
                                if (text.match(emailRegex)) setEmailIsError(false);
                                else setEmailIsError(true);
                            }}
                        />
                    </Input>
                    <FormControlError isInvaild={emailIsError}>
                        <FormControlErrorIcon as={AlertCircleIcon}/>
                        <FormControlErrorText>
                            請輸入正確的電子郵件格式 abc@example.com
                        </FormControlErrorText>
                    </FormControlError>
                </FormControl>
                <FormControl mt={25} isRequired>
                    <Input variant="underlined">
                        <InputField 
                            placeholder="密碼"
                            value={password} 
                            onChangeText={(text) => {
                                setPassword(text);
                                if (text.match(passwordRegex)) setpasswordIsError(false);
                                else setpasswordIsError(true);
                            }}
                        />
                    </Input>
                    <FormControlError isInvaild={passwordIsError}>
                        <FormControlErrorIcon as={AlertCircleIcon}/>
                        <FormControlErrorText>
                            請輸入正確的格式 
                        </FormControlErrorText>
                    </FormControlError>
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
        </Box>
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