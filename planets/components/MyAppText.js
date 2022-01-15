import React from 'react';

import {
    Text,
    StyleSheet
} from 'react-native';

const MyAppText = (props) => {
    const styles = StyleSheet.create({
        text: {
            color: "white",
            fontFamily: "Bungee-Regular",
            fontSize: 42,
            textAlign: "center",
            backgroundColor: "#000000c0"
        }
    })
    
    return (
        <Text style={styles.text}>
            {props.children}
        </Text>
    )
}



export default MyAppText;