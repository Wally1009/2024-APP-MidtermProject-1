import React from "react";
import Men_PerfumeDetail from "../components/Men_PerfumeDetail";
import { SectionList, FlatList, Text, StyleSheet } from "react-native";

const Men_PerfumeList = ({MenPerfumeList}) => {
    const renderSection = ({section}) => (
        <>
            <Text style={style.title}>{section.title}</Text>
            <FlatList
                data={section.data}
                renderItem={({ item }) => <Men_PerfumeDetail MenPerfumeDetail={item} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.key}
                numColumns={2}
            />
        </>
    );
    const render = () => {
        return null;
    };
    return(
        <SectionList
        sections={MenPerfumeList}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        stickySectionHeadersEnabled={false}
        showsHorizontalScrollIndicator={false}
        renderSectionHeader={renderSection}
        renderItem={render}
        keyExtractor={item => item.title}
        />
    );
    
};

const style = StyleSheet.create({
    title: {
      fontFamily: "Roboto",
      fontSize: 32,
      fontWeight: "bold",
      paddingLeft: 10,
      paddingTop:40,
      paddingBottom:30
    }
  })
  


  export default Men_PerfumeList;