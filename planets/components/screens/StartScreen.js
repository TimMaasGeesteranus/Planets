import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';

const image = require('../../public/stars.gif')

const StartScreen = () => {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={image} resizeMode='cover'>
                <Text style={styles.text}>Hello World!</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
})

export default StartScreen;
