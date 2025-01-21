import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from "react-native";

const App = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../../src/assests/images/arrow1.png')}
        style={{ width: 21, height: 21, marginBottom: 14, marginTop: 3 }}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sign Up</Text>
        <Text style={styles.subHeaderText}>
          Create account and choose favorite menu
        </Text>
      </View>

      <View style={styles.inputContainer}>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="John Doe"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />


        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Johndoey@email.com"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />


        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[
            styles.input,
            password.length > 0 &&
            (hasMinLength && hasNumber && hasLetter
              ? styles.validInput
              : styles.invalidInput),
          ]}
          placeholder="Enter your password"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />


        <View style={styles.validationContainer}>
          <Text
            style={[
              styles.validationText,
              hasMinLength ? styles.valid : styles.invalid,
            ]}
          >
            {hasMinLength ? "✓" : "✗"} Minimum 8 characters
          </Text>
          <Text
            style={[
              styles.validationText,
              hasNumber ? styles.valid : styles.invalid,
            ]}
          >
            {hasNumber ? "✓" : "✗"} Atleast 1 number (1-9)
          </Text>
          <Text
            style={[
              styles.validationText,
              hasLetter ? styles.valid : styles.invalid,
            ]}
          >
            {hasLetter ? "✓" : "✗"} Atleast lowercase or uppercase letters
          </Text>
        </View>
      </View>


      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.replace('Verification')}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>


      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.signInText} onPress={() => navigation.replace('login')}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>By clicking Register, you agree to our</Text>
      <Text style={styles.orText1}>Terms Data Policy.</Text>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === "ios" ? 40 : 20,
    marginTop: 30,
  },
  headerContainer: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#666",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 7,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    color: "#000",
    backgroundColor: "#f9f9f9",
  },
  validInput: {
    borderColor: "#53AE44",
  },
  invalidInput: {
    borderColor: "#FF0000",
  },
  validationContainer: {
    marginTop: 10,
  },
  validationText: {
    fontSize: 14,
    marginBottom: 5,
  },
  valid: {
    color: "#D3D3D3",
  },
  invalid: {
    color: "#FF0000",
  },
  registerButton: {
    height: 50,
    backgroundColor: "#53AE44",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  footerText: {
    color: "#666",
  },
  signInText: {
    color: "#53AE44",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
    marginTop: 90,
  },
  orText1: {
    textAlign: "center",
    color: "#53AE44",
    fontSize: 14,
  },
  linkText: {
    color: "#53AE44",
    fontWeight: "bold",
  },
  linkText1: {
    color: "#53AE44",
    fontWeight: "bold",
  },
});
export default App;