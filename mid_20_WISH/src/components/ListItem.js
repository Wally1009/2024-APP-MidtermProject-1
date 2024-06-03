import React from 'react';
import { Text, HStack, Pressable } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";
import { selectColorMode } from "../Redux/accountSlice";

const ListItem = ({ title, destination }) => {
  const { navigate } = useNavigation();
  const colorMode = useSelector(selectColorMode);
  const textMode = colorMode == 'light' ? 'black' : 'white'
   return (
     <Pressable
       onPress={() => {
         destination ? navigate(destination) : null;
       }}
     >
       <HStack
         top={80}
         marginTop={30}
         px="$4"
         justifyContent="center"
       >
         <Text size={16} color={textMode}>{title}</Text>
         
       </HStack>
     </Pressable>
   );
}

export default ListItem;