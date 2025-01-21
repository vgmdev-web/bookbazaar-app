import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList, } from "react-native";
const AuthorProfile = () => {
const products = [
  {
    id: '1',
    title: 'The Da Vinci Code',
    price: '$19.99',
    image: require("../../../src/assests/images/Frame44.png"),

  },
  {
    id: '2',
    title: 'Carrie Fisher',
    price: '$27.12',
    image: require("../../../src/assests/images/Frame55.png"),
  
  },
  {
    id: '3',
    title: 'The Good Sister',
    price: '$27.12',
    image: require("../../../src/assests/images/Frame66.png"),
    
  },
  {
    id: '4',
    title: 'The Waiting',
    price: '$27.12',
    image: require("../../../src/assests/images/Frame77.png"),
   
  },
  {
    id: '5',
    title: 'The Da Vinci Code',
    price: '$19.99',
    image: require("../../../src/assests/images/Frame88.png"),

  },
  {
    id: '6',
    title: 'Carrie Fisher',
    price: '$27.12',
    image: require("../../../src/assests/images/Frame55.png"),
  
  },
  {
    id: '7',
    title: 'The Good Sister',
    price: '$27.12',
    image: require("../../../src/assests/images/Frame66.png"),
    
  },
  {
    id: '8',
    title: 'The Waiting',
    price: '$27.12',
    image: require("../../../src/assests/images/Frame77.png"),
   
  },
];

const renderProduct = ({ item }) => (
  


    <View style={styles.productContainer}>
    <Image source={item.image} style={styles.productImage} />
    <Text style={styles.productTitle}>{item.title}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
  </View>

  );
  return (
    
    <ScrollView style={styles.container}>
      
     <View style={styles.header}>
     <TouchableOpacity >
          <Image onPress={() => navigation.navigation('home')} source={require('../../../src/assests/images/arrow1.png')} style={{ width: 21, height: 21 }} />
          </TouchableOpacity>
          <TouchableOpacity>
        <Text style={styles.title}>Categery</Text></TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.icon}>🔔</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.searchBar}>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for books or authors"
          placeholderTextColor="#888"
        />
      </View>
     <FlatList
             data={products}
             renderItem={renderProduct}
             keyExtractor={(item) => item.id}
             numColumns={2} // Display items in 2 columns
             columnWrapperStyle={styles.row} // Add spacing between rows
             showsVerticalScrollIndicator={false}
           />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 7,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "#A0A0A0",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 16,
  },
  seeAll: {
    fontSize: 16,
    color: "#007BFF",
  },
  bookCard: {
    width: 150,
    height: 180,
    marginRight: 16,
  },
  bookCard1: {
    width: 110,
    height: 110,
    marginRight: 16,
    marginBottom: 16,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  bookPrice: {
    fontSize: 14,
    color: "#666",
  },
  vendorCard: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,

  },
  vendorImage: {
    width: "70%",
    height: "70%",
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  searchIcon: {
    fontSize: 20,
    color: '#888',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',

  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    width: "32%",
   
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  rating: {
    flexDirection: "row",
  },
  star: {
    color: "#E0E0E0",
    fontSize: 12,
  },
  starFilled: {
    color: "#FFD700",
    fontSize: 12,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 3,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
    marginTop: 4,
    textAlign: "left",
  },
});

export default AuthorProfile;
