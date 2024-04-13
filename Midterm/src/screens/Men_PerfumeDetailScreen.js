import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Center, Box, Button, ButtonText, VStack, HStack } from "@gluestack-ui/themed";



import img0 from '../../src/Men_Perfume_img/image CKK Perfume.png';
import img1 from '../../src/Men_Perfume_img/image HERO Perfume.png';
import img2 from '../../src/Men_Perfume_img/image Dior曠野之心.png';
import img3 from '../../src/Men_Perfume_img/image Fire Perfume.png';
import img4 from '../../src/Men_Perfume_img/image Fahrenheit.png';
import img5 from '../../src/Men_Perfume_img/image Homme.png';

const MenPerfumeimgs = [img0, img1, img2, img3, img4, img5];

const Men_PerfumeDetailScreen = ({ route }) => {
    const { title,
            money,
            key,
            descriptions
    } = route.params;
    return (
        <Center backgroundColor='#fff' >
          <VStack>
            <Center pt={50} pb={20}>
              <Image
                style={{ width: 210, height: 300 }}
                source={MenPerfumeimgs[key]}
              />
            </Center>
    
            <Box pt={10} pb={10}>
              <Center>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.money}>{money}</Text>
              </Center>
            </Box>
            <Center>
              <Text style={styles.descriptions}>{descriptions}</Text>
            </Center>
    
            <Center paddingBottom={200}>
              <Button
                width={200}
                bgColor='#6200EE'
                onPress={() => null}
              >
                <ButtonText>
                  BUY NOW FOR $46.99
                </ButtonText>
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
      paddingBottom: 30
    },
    buy_content: {
      fontSize: 14,
      fontFamily: "Roboto",
      lineHeight: 16,
      paddingBottom: 30,
      fontWeight: 500
    }
  })
  
  export default Men_PerfumeDetailScreen;