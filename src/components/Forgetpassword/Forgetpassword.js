import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState('Email'); // Default selection

  return (
    <View style={styles.container}>
        <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} 
              >
                <Text style={styles.arrowText}>←</Text>
              </TouchableOpacity>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Select which contact details should we use to reset your password
      </Text>

      <View style={styles.optionsContainer}>
        {/* Email Option */}
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'Email' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('Email')}
        >
          <Text style={styles.icon}>📧</Text>
          <Text style={styles.optionText}>Email</Text>
          <Text style={styles.optionSubtitle}>Send to your email</Text>
        </TouchableOpacity>

        {/* Phone Option */}
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'Phone' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('Phone')}
        >
          <Text style={styles.icon}>📞</Text>
          <Text style={styles.optionText}>Phone Number</Text>
          <Text style={styles.optionSubtitle}>Send to your phone</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.replace('reset')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
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
    marginTop: 50,
    marginBottom: 10,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c6c6c',
    textAlign: 'left',
    marginBottom: 30,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  option: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedOption: {
    borderColor: '#00b300',
    backgroundColor: '#f0fff0',
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#6c6c6c',
  },
  continueButton: {
    backgroundColor: '#00b300',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
