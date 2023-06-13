import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, PermissionsAndroid, Platform, ImageBackground, Modal, TextInput, ScrollView } from 'react-native';
import { captureRef } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
import DropDownPicker from "react-native-dropdown-picker";
import Opstelling from './src/components/Opstelling';
import Matchday from './src/components/Matchday';
import Singles from './src/components/Singles';
import Koppels from './src/components/Koppels';

import styles from './src/style'

export default function App() {

    const [imageFeature, setImageFeature] = useState(<Opstelling />);

    function onPressButtonImageFeature(imageFeatureString) {

        switch(imageFeatureString) {
            case('Opstelling'):
                setImageFeature(<Opstelling />)
                break;
            case('Matchday'):
                setImageFeature(<Matchday />)
                break;
            case('Singles'):
                setImageFeature(<Singles />)
                break;
            case('Koppels'):
                setImageFeature(<Koppels />)
                break;
            default:
                setImageFeature(<Opstelling />)
        }
    }

    return (

        <View style={styles.container}>
            {imageFeature}
            <View style={styles.buttonBox}>
                <View style={styles.buttonView}>
                    <Button title="Matchday" onPress={() => onPressButtonImageFeature("Matchday")} />
                </View>
                <View style={styles.buttonView}>
                    <Button title="Opstelling" onPress={() => onPressButtonImageFeature("Opstelling")} />
                </View>
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.buttonView}>
                    <Button title="Singles" onPress={() => onPressButtonImageFeature("Singles")} />
                </View>
                <View style={styles.buttonView}>
                    <Button title="Koppels" onPress={() => onPressButtonImageFeature("Koppels")} />
                </View>
            </View>
        </View>
    );
}