import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

const MyAccount = () => {
  const [name, setName] = useState('John');
  const [email, setEmail] = useState('Johndoe@email.com');
  const [phone, setPhone] = useState('(+1) 234 567 890');
  const [password, setPassword] = useState('******');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSaveChanges = () => {
    Alert.alert('Changes Saved', 'Your account details have been updated!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>My Account</Text>

      <Image
        source={require('./src/assets/images/book1.png')} 
        style={styles.profileImage}
      />
      <TouchableOpacity>
        <Text style={styles.changePictureText}>Change Picture</Text>
      </TouchableOpacity>
      <Text style={styles.title1}>Name</Text>
      <TextInput
      
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.title1}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Text style={styles.title1}>Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        keyboardType="phone-pad"
        onChangeText={setPhone}
      />
       <Text style={styles.title1}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!isPasswordVisible)}
        >
          <Text style={styles.togglePassword}>
            {isPasswordVisible ? '👁️' : '👁️'}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
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
    marginBottom: 10,
  },
  backText: {
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  title1: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10,
  },
  changePictureText: {
    textAlign: 'center',
    color: 'green',
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  passwordInput: {
    flex: 1,
  },
  togglePassword: {
    fontSize: 16,
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: '#55AE44',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyAccount;
