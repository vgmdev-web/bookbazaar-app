import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const PromotionScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}><Image source={require('./src/assets/images/arrow1.png')} style={{ width: 21, height: 21 }} />
        </Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Promotion</Text>
        <View style={{ width: 50 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Promotion Card */}
      <View style={styles.promoCard}>
        <View style={styles.promoContent}>
          <Text style={styles.promoTitle}>50% Discount On All Desert</Text>
          <Text style={styles.promoSubtitle}>Grab it now!</Text>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
         <Image source={require('./src/assets/images/Image1.png')} />
      </View>

      {/* Promotion Details */}
      <Text style={styles.mainTitle}>
        Today 50% discount on all products in Chapter with online orders
      </Text>
      <Text style={styles.description}>
        Excuse me... Who could ever resist a discount feast? 👀{'\n\n'}
        Hear me out. Today, October 21, 2021, Chapter has a 50% discount for
        any product. What are you waiting for, let’s order now before it runs
        out.{'\n\n'}
        All of the products are discounted; just order through the Chapter app
        to enjoy this discount. From the best to the best we have prepared for
        you, may you always be happy when ordering at Chapter. Please choose
        the best product you want.{'\n\n'}
        So, what’s your call? Let’s roll, order your comfort food now 😋
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 16,
  },
  backButton: {
    fontSize: 16,
    color: '#007BFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  promoCard: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",

  },
  promoContent: {
        flex: 1,
    justifyContent: 'space-between',
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: '#53AE44',
  },
  promoSubtitle: {
    fontSize: 16,
    color: "#53AE44",
    marginBottom: 21,

    marginVertical: 1,
  },
orderButton: {
    backgroundColor: "#53AE44",
    borderRadius: 22,
    paddingVertical: 8,
    paddingHorizontal: 40,
    marginRight: 36,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    
  },
    promoImage: {
    width: 80,
    height: 140,
    marginRight: 216,
    borderRadius: 8,
  },

  mainTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
});

export default PromotionScreen;
