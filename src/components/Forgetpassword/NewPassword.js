import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const NewPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSend = () => {
    
    if (newPassword !== confirmPassword) {
      
      alert('Passwords do not match.');
    } else {
       
      console.log('New password:', newPassword); 
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
      <Text style={styles.header}>New Password</Text>
      <Text style={styles.description}>
        Create your new password, so you can login to your account.
      </Text>
       <Text style={styles.label}>New Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Image 
          source={require('../../../src/assests/images/hidden.png')} 
          style={styles.visibilityIcon}
        />
      </View>
       <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Image 
          source={require('../../../src/assests/images/hidden.png')} 
          style={styles.visibilityIcon}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', 
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  visibilityIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#55AE44',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NewPasswordScreen;