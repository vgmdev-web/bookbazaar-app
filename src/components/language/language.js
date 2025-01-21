import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LanguageSelectionScreen = () => {
  const languages = [
    { id: 'ta', name: 'Tamil', flag: require('./src/assets/images/Flags1.png') },
    { id: 'en', name: 'English', flag: require('./src/assets/images/flags.png') },
    { id: 'ma', name: 'Mayalayam', flag: require('./src/assets/images/Flags2.png') },
    { id: 'ka', name: 'Kannada', flag: require('./src/assets/images/Flags3.png') },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.arrowText}>←</Text>
            </TouchableOpacity>
      
             <Text style={styles.title}>what language are you studying now ?</Text>
      {languages.map((language) => (
        
        <TouchableOpacity key={language.id} style={styles.languageButton}>
          
          <Image source={language.flag} style={styles.flagIcon} />
          <Text style={styles.languageText}>{language.name}</Text>
        </TouchableOpacity>
        
      ))}
       <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40, 
    color: '#55AE44',
    marginBottom: 5,
  },
  arrowText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderColor: '#A9A9A9',
    borderWidth: 2,

  },
  flagIcon: {
    width: 29,
    height: 28,
    marginRight: 15,
  },
  languageText: {
    color: '#55AE44',
    fontSize: 17,
    fontWeight: '500',
  },
  continueButton: {
    backgroundColor: '#53AE44',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LanguageSelectionScreen;