import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Startpage() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
       
         <Image source={require('./src/assets/images/frame1.png')} />
   
      </View>
      <Text style={styles.title}>Learn language easily with books</Text>
      <Text style={styles.subtitle}>
        Read favorite books in their original language with parallel translation
      </Text>
      <TouchableOpacity style={styles.button}>
        <Image
                  source={require('./src/assets/images/closed-book.png')}
                  style={{ width: 20, height: 20, marginRight: 10 }} 
                />
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
  },
  image: {
    width: 100,
   
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#b0b0b0',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#8C31FF',
    paddingVertical: 15,
    paddingHorizontal: 90, 
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
 
  },
});
