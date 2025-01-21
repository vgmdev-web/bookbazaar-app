import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Logo3 } from '../../assets/images/Group.png';

const OrderReceivedScreen = ({ navigation }) => {
    const [rating, setRating] = useState(4);
    const [feedback, setFeedback] = useState('');

    const handleStarPress = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <View style={styles.container}>

            <img src={Logo3}  />
            <Text style={styles.title}>You Received The Order!</Text>
            <Text style={styles.orderNumber}>Order #2930541</Text>

            
            <View style={styles.feedbackBox}>
                <Text style={styles.feedbackHeader}>Tell us your feedback 👋</Text>
                <Text style={styles.feedbackDescription}>
                    Lorem ipsum dolor sit amet consectetur. Dignissim magna vitae.
                </Text>

                {/* Star Rating */}
                <View style={styles.starContainer}>
                    {[1, 2, 3, 4, 5].map((index) => (
                        <TouchableOpacity key={index} onPress={() => handleStarPress(index)}>
                            <Text style={[styles.star, rating >= index ? styles.activeStar : styles.inactiveStar]}>
                                ★
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Feedback Input */}
                <TextInput
                    style={styles.feedbackInput}
                    placeholder="Write something for us!"
                    value={feedback}
                    onChangeText={setFeedback}
                    multiline
                />
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.doneButton}>
                <Text style={styles.doneButtonText}>Done</Text>
                onPress={() => navigation.goBack()}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    successIcon: {
        width: 80,
        height: 80,
        marginTop: 80,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    orderNumber: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 20,
    },
    feedbackBox: {
        backgroundColor: '#F2F2F7',
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '100%',
        marginBottom: 20,
    },
    feedbackHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    feedbackDescription: {
        fontSize: 14,  
        color: '#4CAF50',
        textAlign: 'center',
        marginVertical: 10,
    },
    starContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
    },
    star: {
        fontSize: 30,
        marginHorizontal: 5,
    },
    activeStar: {
        color: '#FFD700',
    },
    inactiveStar: {
        color: '#ddd',
    },
    feedbackInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 20,
        marginTop: 10,
        minHeight: 60,
        textAlignVertical: 'top',
    },
    doneButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    doneButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default OrderReceivedScreen;
