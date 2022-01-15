import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet
} from 'react-native';
import MyAppText from '../MyAppText';

const image = require('../../public/stars.gif')

const StartScreen = () => {

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={image} resizeMode='cover'>
                <MyAppText color="purple">
                    Hello World!
                </MyAppText>
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
    }
})

export default StartScreen;
