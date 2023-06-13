import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, PermissionsAndroid, Platform, ImageBackground, Modal, TextInput, ScrollView } from 'react-native';
import { captureRef } from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";
import DropDownPicker from "react-native-dropdown-picker";
import Images from './Images';

import styles from '../style'

const Opstelling = () => {

    const [modalVisible, setModalVisible] = useState(false);

      const captureViewRef = useRef();

      const playersData = [
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''},
        {name: '', image: ''}
      ]

      const [playersDataState, setPlayersDataState] = useState([
          {name: '', image: ''},
          {name: '', image: ''},
          {name: '', image: ''},
          {name: '', image: ''}
      ])

      const [opponent, onChangeOpponent] = useState(null);
      const [competition, onChangeCompetition] = useState(null);
      const [round, onChangeRound] = useState(null);
      const [date, onChangeDate] = useState(null);
      const [location, onChangeLocation] = useState(null);

      const playerList = [
        {label: 'Danny van der Plas', value: 'danny'},
        {label: 'Dimitri Poncin', value: 'dimitri'},
        {label: 'Ed van den Berg', value: 'ed'},
        {label: 'Gerard van Dissel', value: 'gerard'},
        {label: 'Jan Twigt', value: 'jan'},
        {label: 'Wilco Kuijt', value: 'wilco'},
        {label: 'Invaller', value: 'invaller'},
      ]

      const [open1, setOpen1] = useState(false);
      const [value1, setValue1] = useState(null);

      const [open2, setOpen2] = useState(false);
      const [value2, setValue2] = useState(null);

      const [open3, setOpen3] = useState(false);
      const [value3, setValue3] = useState(null);

      const [open4, setOpen4] = useState(false);
      const [value4, setValue4] = useState(null);

      const values = [value1, value2, value3, value4];

      function setDataInImage() {

        for (var playerNumber = 0; playerNumber < 4; playerNumber++) {
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
                playersData[playerNumber].image = require('../../assets/images/Danny_high.png')
                break;
            case('dimitri'):
                playersData[playerNumber].name = 'Dimitri Poncin'
                playersData[playerNumber].image = require('../../assets/images/Dimitri_high.png')
                break;
            case('ed'):
                playersData[playerNumber].name = 'Ed van den Berg'
                playersData[playerNumber].image = require('../../assets/images/Ed_high.png')
                break;
            case('gerard'):
                playersData[playerNumber].name = 'Gerard van Dissel'
                playersData[playerNumber].image = require('../../assets/images/Gerard_high.png')
                break;
            case('jan'):
                playersData[playerNumber].name = 'Jan Twigt'
                playersData[playerNumber].image = require('../../assets/images/Jan_high.png')
                break;
            case('wilco'):
                playersData[playerNumber].name = 'Wilco Kuijt'
                playersData[playerNumber].image = require('../../assets/images/Wilco_high.png')
                break;
            case('invaller'):
                playersData[playerNumber].name = 'Invaller'
                playersData[playerNumber].image = require('../../assets/images/Mvg_high.png')
                break;
            default:
                playersData[playerNumber].name = ''
                playersData[playerNumber].image = ''
                break;
        }
      }

      const [items, setItems] = useState(playerList);

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
                        <Text style={styles.textLabel}>Speler 1</Text>
                        <DropDownPicker
                          open={open1}
                          value={value1}
                          items={items}
                          setOpen={setOpen1}
                          setValue={setValue1}
                          setItems={setItems}
                          zIndex={4000}
                          zIndexInverse={1000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Speler 2</Text>
                        <DropDownPicker
                          open={open2}
                          value={value2}
                          items={items}
                          setOpen={setOpen2}
                          setValue={setValue2}
                          setItems={setItems}
                          zIndex={3000}
                          zIndexInverse={2000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Speler 3</Text>
                        <DropDownPicker
                          open={open3}
                          value={value3}
                          items={items}
                          setOpen={setOpen3}
                          setValue={setValue3}
                          setItems={setItems}
                          zIndex={2000}
                          zIndexInverse={3000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Speler 4</Text>
                        <DropDownPicker
                          open={open4}
                          value={value4}
                          items={items}
                          setOpen={setOpen4}
                          setValue={setValue4}
                          setItems={setItems}
                          zIndex={1000}
                          zIndexInverse={4000}
                          style={styles.dropDownPicker}
                          listMode="SCROLLVIEW"
                        />
                        <Text style={styles.textLabel}>Competitie</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeCompetition}
                            value={competition}
                            placeholder="Divisie 1A / Winnaarsbeker"
                            placeholderTextColor="lightgrey"
                        />
                        <Text style={styles.textLabel}>Speelronde</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeRound}
                            value={round}
                            placeholder="Speelronde 1/26 / Laatste 64"
                            placeholderTextColor="lightgrey"
                        />
                        <Text style={styles.textLabel}>Datum</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeDate}
                            value={date}
                            placeholder="dd/mm/jj"
                            placeholderTextColor="lightgrey"
                        />
                        <Text style={styles.textLabel}>Locatie</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={onChangeLocation}
                            value={location}
                            placeholder="De Katwijkse Dartvereniging"
                            placeholderTextColor="lightgrey"
                        />
                        <Button title="Done" onPress={() => setDataInImage()}/>
                    </View>
                  </ScrollView>
                </View>
            </Modal>
            <View ref={captureViewRef} style={{backgroundColor: 'white', overflow: 'hidden'}}>
                <ImageBackground ref={captureViewRef} style={styles.imageBackground} source={Images[getRandomNumber()]} resizeMode="cover">
                    <View style={{backgroundColor: 'rgba(0, 120, 255, 0.7)',}}>
                        <ImageBackground style={styles.imageBackground} source={require("../../assets/images/background-opacity_square.png")} resizeMode="cover">
                            <View style={styles.textContainer}>
                                <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                                    <Text style={styles.topText}>The Final Countdown</Text>
                                    <Text style={styles.opponentText}>vs. {opponent}</Text>
                                </View>
                                <View style={styles.textColumn}>
                                    <Text style={styles.player}>Line-Up</Text>
                                    <Text style={styles.player}>{playersDataState[0].name}</Text>
                                    <Text style={styles.player}>{playersDataState[1].name}</Text>
                                    <Text style={styles.player}>{playersDataState[2].name}</Text>
                                    <Text style={styles.player}>{playersDataState[3].name}</Text>
                                </View>
                                <View style={styles.textColumn}>
                                    <Text style={styles.playerRight}>{competition}</Text>
                                    <Text style={styles.playerRight}>{round}</Text>
                                    <Text style={styles.playerRight}>{date}</Text>
                                    <Text style={styles.playerRight}>{location}</Text>
                                </View>
                            </View>
                            <View style={styles.imageContainer}>
                                <View style={{position: 'absolute', top: 0, bottom: 0, left: 186, right: 0, width: 144, height: 180}}>
                                    <Image source={playersDataState[3].image} resizeMode="cover" style={{width: '100%', height: '100%'}}/>
                                </View>
                                <View style={{position: 'absolute', top: 0, bottom: 0, left: 114, right: 0, width: 144, height: 180}}>
                                    <Image source={playersDataState[2].image} resizeMode="cover" style={{width: '100%', height: '100%'}}/>
                                </View>
                                <View style={{position: 'absolute', top: 0, bottom: 0, left: 42, right: 0, width: 144, height: 180}}>
                                    <Image source={playersDataState[1].image} resizeMode="cover" style={{width: '100%', height: '100%'}}/>
                                </View>
                                <View style={{position: 'absolute', top: 0, bottom: 0, left: -30, right: 0, width: 144, height: 180}}>
                                    <Image source={playersDataState[0].image} resizeMode="cover" style={{width: '100%', height: '100%'}}/>
                                </View>

                            </View>
                        </ImageBackground>
                    </View>
                </ImageBackground>
                <Image source={require("../../assets/images/smoke.png")} resizeMode="contain" style={{width: 300, height: 240, position: 'absolute', bottom: 0}} />
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

export default Opstelling