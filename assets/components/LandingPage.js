import React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Button, StyleSheet, height, width, Platform } from 'react-native';

const LandingPage = ({ navigateToUserForm }) => {

  return (
    // <ImageBackground source={require('../../assets/dataentry.jpeg')}
      // style={styles.imageBackground}>
      <View style={styles.container}>

        <Text style={styles.title}>Welcome To Record Your User List</Text>
        <Text style={styles.subtitle}>Click on the button to get started.</Text>
        <Button style={styles.btn} title="Go to User Form" onPress={navigateToUserForm} color="#262525"/>

      </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 0,
    // marginTop: 0,
    // maxHeight: height,
    // maxWidth: width,
    backgroundColor:'#ffa500',
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center',
    // maxHeight: height,
    //  maxWidth: width,

  },
  title: {
    fontSize: 16,
    // fontFamily:Gemsbuck-Bold-Oblique,
    fontWeight: 'bold',
    marginBottom: 0,
    marginTop: 50,
    alignItems: 'center',
    textAlign: 'center',
    color: '#333',
    
  },
  subtitle: {
    fontSize: 12,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 3,
    color: '#333',
    fontWeight: 'bold',
  },
  btn: {
    width:'100%',
    borderRadius: 8,
    backgroundColor: "white",
    color: '#000000',
    marginTop: 0,
    marginBottom: 10,
    fontWeight: 'bold',
    paddingHorizontal: 25,
    alignSelf: 'stretch',
    elevation:50,
  },
});

export default LandingPage;