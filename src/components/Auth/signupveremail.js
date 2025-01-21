import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const EmailVerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);


    if (value && index < 3) {
      const nextInput = inputs[index + 1];
      nextInput?.focus();
    }
  };

  const inputs = [];

  const handleContinue = () => {
    if (code.join('').length === 4) {
      Alert.alert('Success', `Code entered: ${code.join('')}`);
    } else {
      Alert.alert('Error', 'Please complete the verification code');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Verification Email</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to email {'\n'}
        <Text style={styles.email}>Johndoe@gmail.com</Text>
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(value) => handleCodeChange(value, index)}
            keyboardType="number-pad"
            maxLength={1}
            ref={(input) => (inputs[index] = input)}
          />
        ))}
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>If you didn't recevied a code?</Text>
        <TouchableOpacity onPress={() => Alert.alert('Resend Code')} style={styles.resendButton}>
          <Text style={styles.resendText}> Resend</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleContinue} style={styles.continueButton} >
        <Text style={styles.continueText} onPress={() => navigation.replace('verificationphone')}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 70,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#7a7a7a',
  },
  email: {
    color: '#000',
    fontWeight: '600',

  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
  },
  resendButton: {
    marginBottom: 20,
  },
  resendText: {
    color: '#0a7f2e',
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#0a7f2e',
    paddingVertical: 15,
    paddingHorizontal: 140,
    borderRadius: 22,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default EmailVerificationScreen;
