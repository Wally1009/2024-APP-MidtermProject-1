import React from "react";
import { StyleSheet, Image } from "react-native";
import { Box, Text, VStack, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";


import img0 from '../../src/Men_Perfume_img/image CKK Perfume.png';
import img1 from '../../src/Men_Perfume_img/image HERO Perfume.png';
import img2 from '../../src/Men_Perfume_img/image Dior曠野之心.png';
import img3 from '../../src/Men_Perfume_img/image Fire Perfume.png';
import img4 from '../../src/Men_Perfume_img/image Fahrenheit.png';
import img5 from '../../src/Men_Perfume_img/image Homme.png';



const MenPerfumeimgs = [img0, img1, img2, img3, img4, img5];

const Men_PerfumeDetail = ({MenPerfumeDetail}) => {
    const { navigate } = useNavigation();
    return(
        <Box p={10} marginX={1} marginBottom={2} borderRadius={3} shadow={2}>
            <VStack bg="#fff">
                <VStack marginBottom={10}>
                    <Pressable onPress={() => navigate('Detail', MenPerfumeDetail) }>
                        <Image
                            source={MenPerfumeimgs[MenPerfumeDetail.key]}
                            style={{ width: 140, height: 200 }}
                        />
                    </Pressable>
                </VStack>
                <VStack marginTop={0} marginBottom={5} paddingLeft={2} >
                    <Text bold style={styles.title}>{MenPerfumeDetail.title}</Text>
                    <Text style={styles.money}>{MenPerfumeDetail.money}</Text>
                </VStack>
            </VStack>
        </Box>
    )
};
 
const styles = StyleSheet.create({
    title: {
        fontFamily: "Roboto",
        fontSize: 16,
        marginTop: 5,
        marginBottom: 5
      },
      money: {
        fontFamily: "Roboto",
        fontSize: 14
      }
})

export default Men_PerfumeDetail;