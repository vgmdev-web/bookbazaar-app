import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Image from '../MyReactNativeApp/src/assets/images/Group.png'

const PasswordChangedScreen = () => {
  return (
    <View style={styles.container}>
      <img src={Image} /> 
      <Text style={styles.header}>Password Changed!!</Text>
      <Text style={styles.message}>
        Password changed successfully, you can login again with a new password
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#55AE44',
    padding: 15,
    width: 350,
    borderRadius: 35,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PasswordChangedScreen;