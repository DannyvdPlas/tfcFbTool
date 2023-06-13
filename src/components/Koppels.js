import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, PermissionsAndroid, Platform, ImageBackground, Modal, TextInput, ScrollView } from 'react-native';
import { captureRef } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
import DropDownPicker from "react-native-dropdown-picker";
import Images from './Images';

import styles from '../style'

const Koppels = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const captureViewRef = useRef();

    const [opponent, onChangeOpponent] = useState(null);
    const [resultRR, onChangeResultRR] = useState(null);
    const [result1, onChangeResult1] = useState(null);
    const [result2, onChangeResult2] = useState(null);
    const [result3, onChangeResult3] = useState(null);
    const [result4, onChangeResult4] = useState(null);
    const [resultTotal, onChangeResultTotal] = useState(null);

    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);

    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);

    const [open4, setOpen4] = useState(false);
    const [value4, setValue4] = useState(null);

    const [open5, setOpen5] = useState(false);
    const [value5, setValue5] = useState(null);

    const [open6, setOpen6] = useState(false);
    const [value6, setValue6] = useState(null);

    const [open7, setOpen7] = useState(false);
    const [value7, setValue7] = useState(null);

    const [open8, setOpen8] = useState(false);
    const [value8, setValue8] = useState(null);

    const values = [value1, value2, value3, value4, value5, value6, value7, value8];

    const playersData = [
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
    ]

    const [playersDataState, setPlayersDataState] = useState([
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
    ])

    const playerList = [
        {label: 'Danny van der Plas', value: 'danny'},
        {label: 'Dimitri Poncin', value: 'dimitri'},
        {label: 'Ed van den Berg', value: 'ed'},
        {label: 'Gerard van Dissel', value: 'gerard'},
        {label: 'Jan Twigt', value: 'jan'},
        {label: 'Wilco Kuijt', value: 'wilco'},
        {label: 'Invaller', value: 'invaller'},
    ]

    const [items, setItems] = useState(playerList);

    function setDataInImage() {

        for (var playerNumber = 0; playerNumber < 8; playerNumber++) {
            setPlayerData(playerNumber)
        }

        setPlayersDataState(playersData);

        setModalVisible(!modalVisible)
    }

    function setPlayerData(playerNumber) {

        let currentValue = values[playerNumber]

        switch(currentValue) {
            case('danny'):
                playersData[playerNumber].name = 'Danny van der Plas'
                break;
            case('dimitri'):
                playersData[playerNumber].name = 'Dimitri Poncin'
                break;
            case('ed'):
                playersData[playerNumber].name = 'Ed van den Berg'
                break;
            case('gerard'):
                playersData[playerNumber].name = 'Gerard van Dissel'
                break;
            case('jan'):
                playersData[playerNumber].name = 'Jan Twigt'
                break;
            case('wilco'):
                playersData[playerNumber].name = 'Wilco Kuijt'
                break;
            case('invaller'):
                playersData[playerNumber].name = 'Invaller'
                break;
            default:
                playersData[playerNumber].name = ''
                break;
        }
    }

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
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                  <ScrollView style={styles.scrollView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textLabel}>Tegenstander</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeOpponent}
                            value={opponent}
                            placeholder="Naam"
                            placeholderTextColor="lightgrey"
                        />
                        <Text style={styles.textLabel}>Koppel 1 - Speler 1</Text>
                        <DropDownPicker
                          open={open1}
                          value={value1}
                          items={items}
                          setOpen={setOpen1}
                          setValue={setValue1}
                          setItems={setItems}
                          zIndex={8000}
                          zIndexInverse={1000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Koppel 1 - Speler 2</Text>
                        <DropDownPicker
                          open={open2}
                          value={value2}
                          items={items}
                          setOpen={setOpen2}
                          setValue={setValue2}
                          setItems={setItems}
                          zIndex={7000}
                          zIndexInverse={2000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Uitslag</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeResult1}
                            value={result1}
                        />
                        <Text style={styles.textLabel}>Koppel 2 - Speler 1</Text>
                        <DropDownPicker
                          open={open3}
                          value={value3}
                          items={items}
                          setOpen={setOpen3}
                          setValue={setValue3}
                          setItems={setItems}
                          zIndex={6000}
                          zIndexInverse={3000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Koppel 2 - Speler 2</Text>
                        <DropDownPicker
                          open={open4}
                          value={value4}
                          items={items}
                          setOpen={setOpen4}
                          setValue={setValue4}
                          setItems={setItems}
                          zIndex={5000}
                          zIndexInverse={4000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Uitslag</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeResult2}
                            value={result2}
                        />
                        <Text style={styles.textLabel}>Koppel 3 - Speler 1</Text>
                        <DropDownPicker
                          open={open5}
                          value={value5}
                          items={items}
                          setOpen={setOpen5}
                          setValue={setValue5}
                          setItems={setItems}
                          zIndex={4000}
                          zIndexInverse={5000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Koppel 3 - Speler 2</Text>
                        <DropDownPicker
                          open={open6}
                          value={value6}
                          items={items}
                          setOpen={setOpen6}
                          setValue={setValue6}
                          setItems={setItems}
                          zIndex={3000}
                          zIndexInverse={6000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Uitslag</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeResult3}
                            value={result3}
                        />
                        <Text style={styles.textLabel}>Koppel 4 - Speler 1</Text>
                        <DropDownPicker
                          open={open7}
                          value={value7}
                          items={items}
                          setOpen={setOpen7}
                          setValue={setValue7}
                          setItems={setItems}
                          zIndex={2000}
                          zIndexInverse={7000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Koppel 4 - Speler 2</Text>
                        <DropDownPicker
                          open={open8}
                          value={value8}
                          items={items}
                          setOpen={setOpen8}
                          setValue={setValue8}
                          setItems={setItems}
                          zIndex={1000}
                          zIndexInverse={8000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Uitslag</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeResult4}
                            value={result4}
                        />
                        <Text style={styles.textLabel}>Eindstand</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeResultTotal}
                            value={resultTotal}
                        />
                        <Button title="Done" onPress={() => setDataInImage()}/>
                    </View>
                  </ScrollView>
                </View>
            </Modal>
            <View ref={captureViewRef} style={{backgroundColor: 'white', overflow: 'hidden'}}>
                <ImageBackground ref={captureViewRef} style={styles.imageBackgroundMatchday} source={Images[getRandomNumber()]} resizeMode="cover">
                    <View style={{backgroundColor: 'rgba(0, 120, 255, 0.7)',}}>
                        <ImageBackground style={styles.imageBackgroundMatchday} source={require("../../assets/images/background-opacity_square.png")} resizeMode="cover">
                            <View style={styles.textContainer}>
                                <View style={{width: '100%', alignItems: 'center'}}>
                                    <Text style={styles.topText}>The Final Countdown</Text>
                                    <Text style={styles.opponentText}>vs. {opponent}</Text>
                                </View>
                                <View style={styles.textColumn15Koppels}>

                                </View>
                                <View style={styles.textColumn45Koppels}>
                                    <Text style={styles.playerResultsKoppels}>{playersDataState[0].name}</Text>
                                    <Text style={styles.playerResultsKoppels2}>{playersDataState[1].name}</Text>
                                    <Text style={styles.playerResultsKoppels}>{playersDataState[2].name}</Text>
                                    <Text style={styles.playerResultsKoppels2}>{playersDataState[3].name}</Text>
                                    <Text style={styles.playerResultsKoppels}>{playersDataState[4].name}</Text>
                                    <Text style={styles.playerResultsKoppels2}>{playersDataState[5].name}</Text>
                                    <Text style={styles.playerResultsKoppels}>{playersDataState[6].name}</Text>
                                    <Text style={styles.playerResultsKoppels2}>{playersDataState[7].name}</Text>
                                    <Text style={styles.playerResultsKoppels}>Eindstand</Text>
                                </View>
                                <View style={styles.textColumn40Koppels}>
                                    <Text style={styles.playerRightResultsKoppels}>{result1}</Text>
                                    <Text style={styles.playerRightResultsKoppels}>{result2}</Text>
                                    <Text style={styles.playerRightResultsKoppels}>{result3}</Text>
                                    <Text style={styles.playerRightResultsKoppelsLast}>{result4}</Text>
                                    <Text style={styles.playerRightResultsKoppels}>{resultTotal}</Text>
                                </View>
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
                <View style={styles.buttonView}>
                    <Button title="edit image" onPress={() => setModalVisible(!modalVisible) } />
                </View>
            </View>
        </>
    )
}

export default Koppels