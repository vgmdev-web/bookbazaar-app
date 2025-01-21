import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CongratulationsScreen = () => {
  const handleGetStarted = () => {
    // Handle navigation or action for the "Get Started" button
    alert('Get Started clicked!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
              <Image source={require('./src/assets/images/Group.png')} />
            </View>
      <Text style={styles.title}>Congratulation!</Text>
      <Text style={styles.subtitle}>
        Your account is complete, please enjoy the best menu from us.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 160,
    height: 91,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#7a7a7a',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#0a7f2e',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 22,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CongratulationsScreen;
