import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Startpage() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./src/assets/images/image93.png')} />
      </View>
      <Text style={styles.title}>Upload Your favorite book and start your journey!</Text>
      <Text style={styles.subtitle}>
        You can upload book in .EPUB format
      </Text>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require('./src/assets/images/upload.png')}
          style={{ width: 20, height: 20, marginRight: 10 }} 
        />
        <Text style={styles.buttonText}>add new .EPUB book</Text>
        
      </TouchableOpacity>
      
      <Text style={styles.errorText}>Unknown error. Please try again</Text>
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
    height: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#b0b0b0',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#8C31FF',
    paddingVertical: 15,
    paddingHorizontal: 70, 
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
 
  },
  errorText: {
    marginTop: 40,
    color: '#FF0000',
    fontSize: 16,
    textAlign: 'center',
  },
});
