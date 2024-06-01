import React from 'react';
import { Text, HStack, Pressable } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';

const ListItem = ({ title, destination }) => {
  const { navigate } = useNavigation();
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
         <Text size={16}>{title}</Text>
         
       </HStack>
     </Pressable>
   );
}

export default ListItem;