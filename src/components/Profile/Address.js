import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

const LocationScreen = () => {
  const [address, setAddress] = useState(
    'Utama Street No.20\nstate Street No.15, New York 10001, United States'
  );
  const [savedAs, setSavedAs] = useState('Home'); // Default selection

  const handleConfirmation = () => {
    Alert.alert('Address Confirmed', `Saved as: ${savedAs}`);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Location</Text>

      {/* Map Section */}
      <View style={styles.mapContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x150?text=Map' }} 
          style={styles.map}
        />
      </View>

      {/* Address Details */}
      <View style={styles.detailContainer}>
        <Text style={styles.sectionTitle}>Detail Address</Text>
        <TextInput
          style={styles.input}
          multiline
          value={address}
          onChangeText={setAddress}
        />
        <Text style={styles.sectionTitle}>Save Address As</Text>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[
              styles.tagButton,
              savedAs === 'Home' ? styles.activeButton : {},
            ]}
            onPress={() => setSavedAs('Home')}
          >
            <Text
              style={[
                styles.tagButtonText,
                savedAs === 'Home' ? styles.activeButtonText : {},
              ]}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tagButton,
              savedAs === 'Office' ? styles.activeButton : {},
            ]}
            onPress={() => setSavedAs('Office')}
          >
            <Text
              style={[
                styles.tagButtonText,
                savedAs === 'Office' ? styles.activeButtonText : {},
              ]}
            >
              Office
            </Text>
          </TouchableOpacity>
        </View>

        {/* Confirmation Button */}
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
          <Text style={styles.confirmButtonText}>Confirmation</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 10,
  },
  backText: {
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  mapContainer: {
    height: 150,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  detailContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tagButton: {
    flex: 1,
    borderColor: '#55AE44',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tagButtonText: {
    color: '#555',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activeButton: {
    backgroundColor: '#55AE44',
  },
  activeButtonText: {
    color: '#fff',
  },
  confirmButton: {
    backgroundColor: '#55AE44',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationScreen;
