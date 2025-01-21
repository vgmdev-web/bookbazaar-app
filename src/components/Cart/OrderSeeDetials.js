import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ConfirmOrderScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

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
                        <Text style={styles.lightText}>Dumbo, New York, USA</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.changeButton}>
                    <Text style={styles.changeText}>Change</Text>
                </TouchableOpacity>
            </View>

            {/* Summary Section */}
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Summary</Text>
                <View style={styles.summaryRow}>
                    <Text>Price</Text>
                    <Text>$87.10</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text>Shipping</Text>
                    <Text>$2</Text>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.detailsText}>See details</Text>
                </TouchableOpacity>
            </View>

            {/* Confirm Order Button */}
            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Confirm Order</Text>
            </TouchableOpacity>

            {/* Modal for Payment Details */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Payment Details</Text>
                        
                        <View style={styles.paymentRow}>
                            <Text style={styles.boldText}>Price</Text>
                            <Text style={styles.boldText}>$87.10</Text>
                        </View>

                        <Text>Squid Sweet and Sour Salad - $19.99</Text>
                        <Text>Japan Hainanese Sashimi - $39.99</Text>
                        <Text>Black Pepper Beef Lumpia - $27.12</Text>

                        <View style={styles.paymentRow}>
                            <Text style={styles.boldText}>Shipping</Text>
                            <Text style={styles.boldText}>$2</Text>
                        </View>

                        <View style={styles.paymentRow}>
                            <Text style={styles.boldText}>Total Payment</Text>
                            <Text style={styles.boldText}>$89.10</Text>
                        </View>

                        <TouchableOpacity
                            style={styles.confirmButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.confirmText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    changeButton: {
        marginTop: 10
    },
    changeText: {
        color: 'green',
        fontWeight: 'bold'
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
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
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    paymentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    confirmButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    confirmText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ConfirmOrderScreen;
