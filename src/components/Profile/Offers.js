import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

const CouponsScreen = () => {
  const coupons = [
    { id: "1", discount: "50% OFF", color: "#4CAF50" }, 
    { id: "2", discount: "23% OFF", color: "#FFC107" }, 
    { id: "3", discount: "50% OFF", color: "#2196F3" }, 
    { id: "4", discount: "23% OFF", color: "#FF9800" }, 
    { id: "5", discount: "50% OFF", color: "#000000" }, 
    { id: "6", discount: "23% OFF", color: "#4CAF50" }, 
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backIcon}>←</Text> 
              </TouchableOpacity>
      <Text style={styles.header}>Order History</Text>
      <Text style={styles.subHeader}>You Have 5 Coupons to use</Text>
      <FlatList
        data={coupons}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={[styles.couponCard, { backgroundColor: item.color }]}>
            <Text style={styles.discountText}>{item.discount}</Text>
            <TouchableOpacity style={styles.copyButton}>
              <Text style={styles.copyButtonText}>Copy</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  backButton: {
    textAlign: 'left',
    top: 25,
    left: 20,
  },
  backIcon: {
    fontSize: 35,
    color: '#fff',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: "bold",
    marginBottom: 28,
  },
  subHeader: {
    fontSize: 16,
    color: "#666",
    marginBottom: 26,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 26,
  },
  couponCard: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 8,
    minHeight: 170,
  },
  discountText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 12,
  },
  copyButton: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  copyButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});

export default CouponsScreen;
