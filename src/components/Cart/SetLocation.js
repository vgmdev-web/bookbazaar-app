import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationScreen = () => {
    return (
        <View style={styles.container}>
            {/* Map Section */}
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 40.7128,
                    longitude: -74.0060,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                <Marker
                    coordinate={{ latitude: 40.7128, longitude: -74.0060 }}
                    title="Utama Street No.20"
                />
            </MapView>

            {/* Address Section */}
            <View style={styles.detailCard}>
                <Text style={styles.sectionTitle}>Detail Address</Text>
                <View style={styles.addressRow}>
                    <Text style={styles.addressText}>Utama Street No.20</Text>
                    <Text style={styles.addressDetails}>
                        Dumbo Street No.20, New York, NY 10001, USA
                    </Text>
                </View>

                {/* Address Labels */}
                <Text style={styles.sectionTitle}>Save Address As</Text>
                <View style={styles.addressTags}>
                    <TouchableOpacity style={styles.tagSelected}>
                        <Text style={styles.tagText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tagUnselected}>
                        <Text style={styles.tagText}>Offices</Text>
                    </TouchableOpacity>
                </View>

                {/* Confirmation Button */}
                <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmText}>Confirmation</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: 250,
    },
    detailCard: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    addressRow: {
        marginBottom: 20,
    },
    addressText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    addressDetails: {
        fontSize: 14,
        color: 'gray',
    },
    addressTags: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    tagSelected: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    tagUnselected: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 20,
    },
    tagText: {
        color: 'white',
        fontWeight: 'bold',
    },
    confirmButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    confirmText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LocationScreen;
