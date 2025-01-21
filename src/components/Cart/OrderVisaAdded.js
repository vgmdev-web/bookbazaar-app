import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ConfirmOrderScreen = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} />
                <Text style={styles.headerText}>Confirm Order</Text>
                <Ionicons name="notifications-outline" size={24} />
            </View>

            {/* Address Section */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Address</Text>
                <View style={styles.addressRow}>
                    <Ionicons name="location-outline" size={24} color="green" />
                    <View>
                        <Text style={styles.boldText}>Utama Street No.20</Text>
                        <Text style={styles.lightText}>Dumbo, New York 10001, USA</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.changeButton}>
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>

            {/* Summary Section */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Summary</Text>
                <View style={styles.row}>
                    <Text>Price</Text>
                    <Text>$87.10</Text>
                </View>
                <View style={styles.row}>
                    <Text>Shipping</Text>
                    <Text>$2</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.boldText}>Total Payment</Text>
                    <Text style={styles.boldText}>$89.10</Text>
                </View>
                <TouchableOpacity>
                    <Text style={styles.detailsText}>See details </Text>
                </TouchableOpacity>
            </View>

            {/* Date and Time Section */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Date and Time</Text>
                <View style={styles.row}>
                    <Ionicons name="calendar-outline" size={24} />
                    <Text style={styles.lightText}>Choose date and time</Text>
                </View>
            </View>

            {/* Payment Section */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Payment</Text>
                <View style={styles.row}>
                    <Ionicons name="card-outline" size={24} />
                    <Text style={styles.lightText}>Choose your payment</Text>
                </View>
            </View>

            {/* Order Button */}
            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Order</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9F9F9'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    boldText: {
        fontWeight: 'bold'
    },
    lightText: {
        color: 'grey'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    changeButton: {
        marginTop: 10,
        alignSelf: 'flex-start'
    },
    changeText: {
        color: 'green',
        fontWeight: 'bold'
    },
    detailsText: {
        color: 'green',
        marginTop: 10
    },
    orderButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    orderButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ConfirmOrderScreen;
