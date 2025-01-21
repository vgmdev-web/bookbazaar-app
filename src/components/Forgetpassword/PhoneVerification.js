import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const VerificationCodeScreen = () => {
  
  const [code, setCode] = useState(['', '', '', '']); // For 4-digit OTP

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Automatically move to the next input field
    if (value && index < code.length - 1) {
      inputs[index + 1].focus();
    }
  };

  const inputs = []; // To track input refs for auto-navigation

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      {/* Title and Subtitle */}
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to Phone Number
      </Text>
      <Text style={styles.email}>(+965)123 435 7565</Text>

      {/* Code Input Fields */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs[index] = ref)} // Store input refs
            style={styles.codeInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleCodeChange(value, index)}
          />
        ))}
      </View>

      {/* Resend Text */}
      <Text style={styles.resendText}>
        If you didn’t receive a code?{' '}
        <Text style={styles.resendLink}>Resend</Text>
      </Text>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => {
          console.log(`Entered Code: ${code.join('')}`);
          // Add logic to verify code here
        }}
      >
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
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60, // Space for back button
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c6c6c',
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginTop: 5,
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    padding: 10,
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: 50,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  resendText: {
    textAlign: 'center',
    color: '#6c6c6c',
    fontSize: 14,
    marginBottom: 30,
  },
  resendLink: {
    color: '#00b300',
    fontWeight: 'bold',
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

export default VerificationCodeScreen;
