import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome icon library

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      
      <View style={styles.content}>
        <Text style={[styles.text, isDarkMode ? styles.darkText : styles.lightText]}>
          This is a sample paragraph. You can switch between Dark Mode and Light Mode using the button below. 
          Experiment with this layout and make it your own!
          This is a sample paragraph. You can switch between Dark Mode and Light Mode using the button below. 
          Experiment with this layout and make it your own!
          This is a sample paragraph. You can switch between Dark Mode and Light Mode using the button below. 
          Experiment with this layout and make it your own!
          This is a sample paragraph. You can switch between Dark Mode and Light Mode using the button below. 
          Experiment with this layout and make it your own!
        </Text>
      </View>

     
      <View style={[styles.navbar, isDarkMode ? styles.darkNavbar : styles.lightNavbar]}>
        
        <TouchableOpacity style={styles.navButton} onPress={() => alert('Back Button Pressed')}>
          <Text style={[styles.navButtonText, isDarkMode ? styles.darkText : styles.lightText]}>
            ←
          </Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.navButton} onPress={toggleMode}>
          
          {isDarkMode ? (
            <Text style={{ fontSize: 24, color: '#f39c12' }}>🌙</Text> 
          ) : (
            <Text style={{ fontSize: 24, color: '#3498db' }}>💡</Text> 
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  darkBackground: {
    backgroundColor: '#121212',
  },
  lightBackground: {
    backgroundColor: '#ffffff',
  },
  darkText: {
    color: '#ffffff',
  },
  lightText: {
    color: '#000000',
  },

  
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 60,
  },
  darkNavbar: {
    backgroundColor: '#1c1c1c',
  },
  lightNavbar: {
    backgroundColor: '#f8f9fa',
  },

 
  navButton: {
    padding: 5,
  },
  navButtonText: {
    fontSize: 19,
    
  },
});

export default App;
