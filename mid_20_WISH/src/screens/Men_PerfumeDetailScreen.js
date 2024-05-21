import React,{useState} from 'react';
import { StyleSheet, Image, Text,View } from 'react-native';
import { Center, Box, Button, ButtonText, VStack, HStack,Pressable } from "@gluestack-ui/themed";

import img0 from '../../src/Men_Perfume_img/image CKK Perfume.png';
import img1 from '../../src/Men_Perfume_img/image HERO Perfume.png';
import img2 from '../../src/Men_Perfume_img/image Dior曠野之心.png';
import img3 from '../../src/Men_Perfume_img/image Fire Perfume.png';
import img4 from '../../src/Men_Perfume_img/image Fahrenheit.png';
import img5 from '../../src/Men_Perfume_img/image Homme.png';
import img6 from '../../src/img/cart-plus.png';
import img7 from '../../src/img/heart-plus-outline.png';
import img8 from '../../src/img/heart-plus-outline-fullwhite.png'
const MenPerfumeimgs = [img0, img1, img2, img3, img4, img5];
const plusclothesicon=[img6,img7];

const Men_PerfumeDetailScreen = ({ route,heartClicked, setHeartClicked }) => {
    const { title,
            money,
            key,
            descriptions,
           
    } = route.params;
    
    const [heartIcon,setHeartIcon]=useState(heartClicked ? img8 : img7)
    const toggleHeartIcon = () => {
      setHeartIcon(prevIcon => prevIcon === img7 ? img8 : img7); // 切换心形图标的状态
    };
    return (
        <Center backgroundColor='#fff' >
          <VStack>
            <Center pt={50} pb={20}>
              <Image
                style={{ width: 221, height: 316 }}
                source={MenPerfumeimgs[key]}
              />
            </Center>
    
            <Box pt={10} pb={10}>
              <Center>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.descriptions}>{descriptions}</Text>
              </Center>
            </Box>
            <Center paddingBottom={110}>
            <Button
                width={400}
                height={60}
                bgColor='black'
                onPress={() => null}
                style={{ position: 'absolute', bottom: 0 }}
              >
                <ButtonText position="absolute" left={20} top={10}>
                  <Text style={styles.clothesname}>{title}</Text>
                  {"\n"}
                  <Text style={styles.clothesname}>{money}</Text>
                  
                </ButtonText>
                <View style={styles.iconContainer}>
                    <Image source={plusclothesicon[0]} style={styles.icon} />
                    <Pressable onPress={toggleHeartIcon}>
                    <Image source={heartIcon} style={[styles.icon, styles.secondIcon]} />
                    </Pressable>
                  </View>
              </Button>
            </Center>
          </VStack>
        </Center>
        
    
    );
}

const styles = StyleSheet.create({
    title: {
      fontFamily: "Roboto",
      fontSize: 24,
      fontWeight: "bold",
      paddingTop: 10,
      paddingBottom: 2
    },
    clothesname:{
      fontFamily: "Roboto",
      fontSize: 15,
      textAlign:'left'
    },
    money: {
      fontFamily: "Roboto",
      fontSize: 14,
      paddingTop: 10,
      paddingBottom: 10
    },
    rate: {
      paddingLeft: 10
    },
    descriptions: {
      width: 320,
      textAlign: "center",
      fontSize: 14,
      fontFamily: "Roboto",
      lineHeight: 24,
      paddingBottom: 30,
      marginTop:50,
      color:'black'
    },
    buy_content: {
      fontSize: 14,
      fontFamily: "Roboto",
      lineHeight: 16,
      paddingBottom: 30,
      fontWeight: 500
    },
    icon: {
      width: 24,
      height: 24,
      marginHorizontal: 30,
      
    },
    secondIcon: {
      marginLeft: 0,
    },
    iconContainer:{
      position: "absolute",
      bottom: 21,
      right: 10,
      flexDirection: "row",
    }
  })
  
  export default Men_PerfumeDetailScreen;