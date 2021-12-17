import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Loc } from "./location";
import Accel from "./accel";
import Gyro from "./gyro";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.paragraph} latLoc={Loc().lat} lngLoc={Loc().lng}>{Loc()}</Text>
            <Text style={styles.paragraph} xGyro={Gyro().x} yGyro={Gyro().y} zGyro={Gyro().z}>{Gyro()}</Text>
            <Text style={styles.paragraph} xAcc={Accel().x} yAcc={Accel().y} zAcc={Accel().z}>{Accel()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
});







