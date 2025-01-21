import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ConfirmOrderScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Today 12 Jan');
    const [selectedTime, setSelectedTime] = useState('10PM - 11PM');

    const handleConfirm = () => {
        setModalVisible(false);
    };

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

            {/* Delivery Date & Time Section */}
            <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
                <Text style={styles.cardTitle}>Delivery date & time</Text>
                <Text>{selectedDate} - {selectedTime}</Text>
            </TouchableOpacity>

            {/* Confirm Button */}
            <TouchableOpacity style={styles.orderButton}>
                <Text style={styles.orderButtonText}>Confirm Order</Text>
            </TouchableOpacity>

            {/* Modal for Delivery Selection */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Delivery date</Text>
                        <View style={styles.dateOptions}>
                            <TouchableOpacity onPress={() => setSelectedDate('Today 12 Jan')}>
                                <Text style={styles.dateButton}>Today 12 Jan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedDate('Tomorrow 13 Jan')}>
                                <Text style={styles.dateButton}>Tomorrow 13 Jan</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedDate('Pick a date')}>
                                <Text style={styles.dateButton}>Pick a date</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.modalTitle}>Delivery time</Text>
                        <View style={styles.dateOptions}>
                            <TouchableOpacity onPress={() => setSelectedTime('10PM - 11PM')}>
                                <Text style={styles.dateButton}>10PM - 11PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setSelectedTime('11PM - 12AM')}>
                                <Text style={styles.dateButton}>11PM - 12AM</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                            <Text style={styles.confirmText}>Confirm</Text>
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
        marginTop: 10,
        alignSelf: 'flex-start'
    },
    changeText: {
        color: 'green',
        fontWeight: 'bold'
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
    dateOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    dateButton: {
        padding: 10,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center'
    },
    confirmButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    confirmText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default ConfirmOrderScreen;
