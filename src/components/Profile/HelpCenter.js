import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HelpCenterScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text> {/* Replace with an icon library if needed */}
        </TouchableOpacity>
        <Text style={styles.title}>Order History</Text>
        <Text style={styles.subtitle}>Help Center</Text>
        <Text style={styles.description}>
          Tell us how we can help 👋{'\n'}Chapter are standing by for service & support!
        </Text>
      </View>

      {/* Card Section */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📧</Text> {/* Replace with an email icon */}
          </View>
          <Text style={styles.cardTitle}>Email</Text>
          <Text style={styles.cardSubtitle}>Send to your email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📞</Text> {/* Replace with a phone icon */}
          </View>
          <Text style={styles.cardTitle}>Phone Number</Text>
          <Text style={styles.cardSubtitle}>Send to your phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    backgroundColor: '#4CAF50',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 25,
    left: 20,
  },
  backIcon: {
    fontSize: 35,
    color: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 35,
  },
  description: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    lineHeight: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFF',
    flex: 1,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    color: '#4CAF50',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#777',
  },
});

export default HelpCenterScreen;
