import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const ResetPasswordScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.arrowText}>←</Text>
      </TouchableOpacity>

      
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
        Please enter your email, we will send verification code to your email.
      </Text>

     
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@email.com"
        placeholderTextColor="#c4c4c4"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      
      <TouchableOpacity style={styles.sendButton} onPress={() => navigation.replace('emailverification')}>
        <Text style={styles.sendButtonText}>Send</Text>
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
    textAlign: 'left',
    marginTop: 60, 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c6c6c',
    textAlign: 'left',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: '#00b300',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
