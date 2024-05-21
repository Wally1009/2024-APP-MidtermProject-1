import React from 'react';
import { StyleSheet } from "react-native";
import { Box } from '@gluestack-ui/themed';

const Header = () => {
  return (
    <Box style={styles.header}/>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    height: 70,
  }
})

export default Header;