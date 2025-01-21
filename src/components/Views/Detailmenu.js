import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <View style={styles.productImage}>
             <Image source={require('./src/assets/images/book.png')} />
           </View>

      {/* Product Title */}
      <Text style={styles.productTitle}>The Kite Runner</Text>

      <Image source={require('./src/assets/images/vn4.png')} style={{ width: 81, height: 31, marginBottom: 5, marginTop: 5,}} />
      

      {/* Product Description */}
      <Text style={styles.productDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        dignissim ac ac ac. Nibh et sed ac, eget malesuada.
      </Text>

      <Text style={styles.vendor}>Review</Text>
      {/* Review Section */}

      <View style={styles.reviewSection}>
        <View style={styles.stars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Text
              key={index}
              style={index < 4 ? styles.starFilled : styles.star}
            >
              ★
            </Text>
          ))}
        </View>
        <Text style={styles.rating}>(4.0)</Text>
      </View>

      {/* Quantity Selector */}
      <View style={styles.quantitySection}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={[styles.quantityButton, quantity === 1 && styles.disabled]}
          disabled={quantity === 1}
        >
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.price}>$39.99</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue shopping</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={styles.cartText}>View cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    resizeMode: "cover",
    marginBottom: 16,
    alignItems: "center",
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 8,
  },
  vendor: {
    fontSize: 24,
    color: "#000000",
    marginBottom: 5,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 16,
    color: "#A6A6A6",
    marginBottom: 16,
  },
  reviewSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  stars: {
    flexDirection: "row",
  },
  star: {
    color: "#E0E0E0",
    fontSize: 20,
  },
  starFilled: {
    color: "#FFD700",
    fontSize: 20,
  },
  rating: {
    marginLeft: 8,
    fontSize: 14,
    color: "#6E6E6E",
  },
  quantitySection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#53AE44",
    borderRadius: 12,
  },
  disabled: {
    opacity: 0.5,
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: "bold",
    color: "#2ECC71",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  continueButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#53AE44",
    borderRadius: 22,
    alignItems: "center",
    marginRight: 8,
    marginTop: 20,
  },
  cartButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#F5F5F5",
    borderRadius: 22,
    alignItems: "center",
    marginTop: 20,
  },
  continueText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cartText: {
    color: "#53AE44",
    fontWeight: "bold",
  },
});

export default ProductDetails;
