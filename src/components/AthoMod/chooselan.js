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
      <View style={styles.container1}>
      <Image
                source={require('./src/assets/images/arrow.png')}
                style={{ width: 40, height: 40,  }} 
              />
          <Text style={styles.header}> What language are you studying now?</Text>
          </View>

      {languages.map((language) => (
        <TouchableOpacity key={language.id} style={styles.languageButton}>
          <Image source={language.flag} style={styles.flagIcon} />
          <Text style={styles.languageText}>{language.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  container1: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    paddingHorizontal: 20,
    paddingLeft: 5,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
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
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default LanguageSelectionScreen;
