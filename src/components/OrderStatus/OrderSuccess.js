import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OrderConfirmationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          
            <View style={styles.header}>
                <Text style={styles.thankYouText}>Thank you 👋</Text>
                <Text style={styles.confirmationText}>Lorem ipsum dolor sit</Text>
                <Text style={styles.orderNumber}>Order #2930541</Text>
            </View>

          
            <Text style={styles.cancelText}>
                Do you want to cancel your order? <Text style={styles.cancelLink}>Cancel</Text>
            </Text>

            <View style={styles.container1}>
      <Text style={styles.header}>Order Details</Text>
      <View style={styles.itemRow}>
        <Text style={styles.item}>1x Carrie Fisher</Text>
        <Text style={styles.price}>₹19.99</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.item}>1x The Da Vinci Code</Text>
        <Text style={styles.price}>₹39.99</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.item}>1x Arcu ipsum feugiat leo odio</Text>
        <Text style={styles.price}>₹27.12</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.itemRow}>
        <Text style={styles.item}>Subtotal</Text>
        <Text style={styles.price}>₹87.10</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.item}>Shipping</Text>
        <Text style={styles.price}>₹2.00</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.itemRow}>
        <Text style={styles.totalText}>Total Payment</Text>
        <Text style={styles.totalPrice}>₹89.10</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.item}>Delivery in:</Text>
        <Text style={styles.price}>10 - 15 mins</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.item}>Time:</Text>
        <Text style={styles.price}>15:24 - 15:39</Text>
      </View>
      
    </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Order Status</Text>
                onPress={() => navigation.navigate('Details')}
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
    container1: {
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
      margin: 10,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    itemRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 5,
    },
    item: {
      fontSize: 16,
      color: '#333',
    },
    price: {
      fontSize: 16,
      color: '#333',
    },
    divider: {
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: 10,
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    totalPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'green',
    },
    deliveryText: {
      fontSize: 14,
      color: '#666',
      marginTop: 5,
    },
    header: {
        backgroundColor: '#F2F2F7',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    thankYouText: {
        fontSize: 20,
    },
    confirmationText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    orderNumber: {
        fontSize: 16,
        color: 'gray',
    },
    cancelText: {
        fontSize: 16,
        marginBottom: 20,
    },
    cancelLink: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    orderDetails: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    price: {
        fontWeight: 'bold',
        alignItems: 'Right',
    },
    
   
    
    
    button: {
        backgroundColor: '#D3D3D3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#4CAF50',
        fontWeight: 'bold',
    },
});

export default OrderConfirmationScreen;
