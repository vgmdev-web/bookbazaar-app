import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const LocationForm = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
           
            {[
                { label: 'Phone', placeholder: 'Phone' },
                { label: 'Name', placeholder: 'Name' },
                { label: 'Governorate', placeholder: 'Governorate' },
                { label: 'City', placeholder: 'City' },
                { label: 'Block', placeholder: 'Block' },
                { label: 'Street Name/Number', placeholder: 'Street name/number' },
                { label: 'Building Name/Number', placeholder: 'Building name/number' },
                { label: 'Floor (optional)', placeholder: 'Floor (optional)' },
                { label: 'Flat (optional)', placeholder: 'Flat (optional)' },
                { label: 'Avenue (optional)', placeholder: 'Avenue (optional)' }
            ].map((field, index) => (
                <View key={index} style={styles.inputContainer}>
                    <Text style={styles.label}>{field.label}</Text>
                    <TextInput
                        placeholder={field.placeholder}
                        style={styles.input}
                    />
                </View>
            ))}

          
            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.confirmText}>Confirmation</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f5f5f5',
    },
    confirmButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
    },
    confirmText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LocationForm;
