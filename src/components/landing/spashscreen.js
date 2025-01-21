import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
   
  return (
    <View style={styles.container} >
      
     <Image  source={require('../../assests/images/logo.png')} />
    
     <TouchableOpacity
              style={styles.continueButton}
              onPress={() => navigation.replace('onboarding2')}  // Navigate to Onboarding2 screen
            >
             
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
  },
  continueButton: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160, 
    marginBottom: 20,
  },

});

export default SplashScreen;