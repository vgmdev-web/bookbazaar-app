import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
   
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.replace('onboarding4')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

 
      <View style={styles.mainContent}>
       

<Image style={styles.image} source={require('../../assests/images/Frame22.png')} />

        <Text style={styles.title}>Your Bookish Soulmate Awaits</Text>
        <Text style={styles.description}>
        Let us be your guide to the perfect read. Discover books tailored to your tastes for a truly rewarding experience.
        </Text>
      </View>

     
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText1} onPress={() => navigation.navigate('onboarding4')}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  skipButton: {
    
    marginTop: 16,
    alignItems: 'left',
  },
  skipText: {
    color: '#4CAF50',
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 16,
  },
  description: {
    fontSize: 17,
    textAlign: 'center',
    color: '#666666',
    marginHorizontal: 16,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default App;
