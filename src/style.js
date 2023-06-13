import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontFamily: 'NoFlickingThanks',
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 10
  },
  opponentText: {
    fontFamily: 'NoFlickingThanks',
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 3
  },
  matchday: {
    fontFamily: 'NoFlickingThanks',
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 45
  },
  comeontfc: {
      fontFamily: 'NoFlickingThanks',
      textAlign: 'center',
      fontSize: 25,
      color: 'white',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
      marginTop: 3
    },
  imageBackground: {
    height: 300,
    width: 300,
  },
  imageBackgroundMatchday: {
      height: 240,
      width: 300
  },
  player: {
    fontFamily: 'NoFlickingThanks',
    left: 12,
    lineHeight: 13,
    fontSize: 11,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  playerRight: {
    fontFamily: 'NoFlickingThanks',
    right: 12,
    lineHeight: 13,
    fontSize: 11,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textAlign: 'right'
  },
  playerResults: {
    fontFamily: 'NoFlickingThanks',
    left: 12,
    lineHeight: 26,
    fontSize: 11,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  playerRightResults: {
    fontFamily: 'NoFlickingThanks',
    right: 12,
    lineHeight: 26,
    fontSize: 11,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textAlign: 'center'
  },
  playerResultsKoppels: {
    fontFamily: 'NoFlickingThanks',
    left: 12,
    fontSize: 11,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  playerResultsKoppels2: {
    fontFamily: 'NoFlickingThanks',
    left: 12,
    fontSize: 11,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginBottom: 10,
  },
  playerRightResultsKoppels: {
    fontFamily: 'NoFlickingThanks',
    right: 12,
    lineHeight: 21,
    fontSize: 11,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textAlign: 'center',
    marginBottom: 11,
  },
  playerRightResultsKoppelsLast: {
      fontFamily: 'NoFlickingThanks',
      right: 12,
      lineHeight: 21,
      fontSize: 11,
      color: 'white',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
      textAlign: 'center',
      marginBottom: 5,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  textColumn: {
    width: '50%',
    marginTop: 4
  },
  textColumn15: {
    width: '15%',
    marginTop: 4
  },
  textColumn45: {
    width: '45%',
    marginTop: 4
  },
  textColumn40: {
    width: '40%',
    marginTop: 4
  },
  textColumn15Koppels: {
    width: '15%',
    marginTop: 12
  },
  textColumn45Koppels: {
    width: '45%',
    marginTop: 12
  },
  textColumn40Koppels: {
    width: '40%',
    marginTop: 12
  },
  imageContainer: {
    height: 180,
    width: '100%'
  },
  centeredView: {
    flex: 1,
    marginVertical: '20%',
  },
  scrollView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  modalView: {
    padding: 35
  },
  dropDownPicker: {
    marginTop: 2,
    marginBottom: 12,
  },
  textInput: {
    height: 40,
    marginTop: 2,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
    placeholderTextColor: 'black'
  },
  buttonBox: {
    flexDirection: 'row'
  },
  buttonView: {
    padding: 10
  },
  textLabel: {
    color: 'black'
  }
});