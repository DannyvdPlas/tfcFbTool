import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, PermissionsAndroid, Platform, ImageBackground, Modal, TextInput, ScrollView } from 'react-native';
import { captureRef } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
import DropDownPicker from "react-native-dropdown-picker";
import Images from './Images';

import styles from '../style'

const Matchday = () => {

    const captureViewRef = useRef();

    async function hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }

    async function savePicture() {

        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
          return;
        }

        captureRef(captureViewRef, {
          format: "jpg",
          quality: 0.8
        }).then(
          uri => moveToFolder(uri),
          error => console.error("Oops, snapshot failed", error)
        );
    };

    async function moveToFolder(uri) {

        CameraRoll.save(uri)
    }


    function getRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 24) + 1;
        return randomNumber;
    }

    return (
        <>
            <View ref={captureViewRef} style={{backgroundColor: 'white', overflow: 'hidden'}}>
                <ImageBackground ref={captureViewRef} style={styles.imageBackgroundMatchday} source={Images[getRandomNumber()]} resizeMode="cover">
                    <View style={{backgroundColor: 'rgba(0, 120, 255, 0.7)',}}>
                        <ImageBackground style={styles.imageBackgroundMatchday} source={require("../../assets/images/background-opacity_square.png")} resizeMode="cover">
                            <View style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={styles.matchday}>{"It's Matchday!"}</Text>
                                <Text style={styles.comeontfc}>#ComeOnTFC</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </ImageBackground>
                <Image source={require("../../assets/images/ITOS.png")} resizeMode="contain" style={{width: 30, height: 24, bottom: 2, left: 6, position: 'absolute'}} />
                <Image source={require("../../assets/images/kdv.png")} resizeMode="contain" style={{width: 50, height: 40, bottom: -6, right: 5, position: 'absolute'}} />
            </View>
            <View style={styles.buttonBox}>
                <View style={styles.buttonView}>
                    <Button title="save" onPress={savePicture}/>
                </View>
            </View>
        </>
    )
}

export default Matchday