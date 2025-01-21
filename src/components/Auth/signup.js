import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';


const App = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../src/assests/images/arrow1.png')}
        style={{ width: 21, height: 21, marginBottom: 14, marginTop: 3 }}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
        <Text style={styles.subHeaderText}>Create account and choose fevorite menu</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.Text1}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#ccc"
          keyboardType="Your Name"
        />
        <Text style={styles.Text1}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
        />
        <Text style={styles.Text1}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Your password"
            placeholderTextColor="#ccc"
            secureTextEntry={!passwordVisible}
          />
          <Image
            source={require('../../../src/assests/images/Password.png')}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >

          </TouchableOpacity>
        </View>

      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.replace('Verification')}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText} onPress={() => navigation.replace('login')}>Sign In</Text>

        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>By clicking Register, you agree to our</Text>
      <Text style={styles.orText1}>Terms and Data Policy.</Text>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 40 : 20,

  },
  headerContainer: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
  },
  Text1: {
    fontSize: 16,
    color: '#666',
    marginBottom: 7,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    color: '#000',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotPassword: {
    color: '#53AE44',
    textAlign: 'left',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#53AE44',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: '#666',
  },
  signUpText: {
    color: '#53AE44',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 190,
  },
  orText1: {
    textAlign: 'center',
    color: '#53AE44',

  },
  socialButtonsContainer: {
    alignItems: 'center',

  },
  socialButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default App;