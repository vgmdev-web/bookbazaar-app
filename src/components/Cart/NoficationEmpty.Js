import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotificationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity
                          style={styles.backButton}
                          onPress={() => navigation.goBack()}
                        >
                          <Text style={styles.arrowText}>←</Text>
                        </TouchableOpacity>

           
            <Text style={styles.title}>Notification</Text>

            
            <Image
                source={{ uri: 'https://img.icons8.com/ios/100/000000/appointment-reminders.png' }}
                style={styles.icon}
            />

           
            <Text style={styles.message}>There is no notifications</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrowText: {
      fontSize: 44,
      fontWeight: 'bold',
      color: '#000',
    }, 
    arrowText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20,
    },
    icon: {
        width: 100,
        height: 100,
        marginTop: 200,
        marginBottom: 10,
        opacity: 0.2,
    },
    message: {
        fontSize: 18,
        color: 'gray',
    },
});

export default NotificationScreen;
