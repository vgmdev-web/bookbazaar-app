import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, } from "react-native";

const books = [
  {
    id: "1",
    title: "The Kite Runner",
    price: "$14.99",
    image: require("../../../src/assests/images/book4.png"),
  },
  {
    id: "2",
    title: "The Subtle Art of Not Giving a F*ck",
    price: "$20.99",
    image: require("../../../src/assests/images/book5.png"),
  },
  {
    id: "3",
    title: "The Art of War",
    price: "$14.99",
    image: require("../../../src/assests/images/book8.png"),
  },
  {
    id: "4",
    title: "The Art of War",
    price: "$15.99",
    image: require("../../../src/assests/images/book7.png"),
  },
];

const vendors = [
  {
    id: "1",
    name: "Warehouse Stationary",
    image: require("../../../src/assests/images/Group1.png"),
  },
  {
    id: "2",
    name: "Furrow by Sendy",
    image: require("../../../src/assests/images/Group2.png"),
  },
  {
    id: "3",
    name: "Good Day",
    image: require("../../../src/assests/images/Group3.png"),
  },
  {
    id: "4",
    name: "Crane & Co.",
    image: require("../../../src/assests/images/Group4.png"),
  },
];

const authors = [
  {
    id: "1",
    title: "John Freedom",
    price: "writer",
    image: require("../../../src/assests/images/ventor1.png"),
  },
  {
    id: "2",
    title: "Tess Gunty",
    price: "Novelist",
    image: require("../../../src/assests/images/ventor2.png"),
  },
  {
    id: "3",
    title: "Richard",
    price: "writer",
    image: require("../../../src/assests/images/ventor3.png"),
  },
  {
    id: "4",
    title: "Tess Gunty",
    price: "Novelist",
    image: require("../../../src/assests/images/ventor4.png"),
  },
];

const App = ({ navigation }) => {
  const renderBookItem = ({ item }) => (
    <View style={styles.bookCard}>
       <Image source={item.image} style={styles.vendorImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookPrice}>{item.price}</Text>
    </View>
  );

  const renderBookItem1 = ({ item }) => (
    <View style={styles.bookCard1}>
       <Image source={item.image} style={styles.vendorImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookPrice}>{item.price}</Text>
    </View>
  );

  const renderVendorItem1 = ({ item }) => (
    <View style={styles.vendorCard}>
      <Image source={item.image} style={styles.vendorImage} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
     <View style={styles.header}>
        
        <Text style={styles.title}>Home</Text>
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
      <View style={styles.offerContainer}>
        <View>
          <Text style={styles.offerText}>Special Offer</Text>
          <Text style={styles.discountText}>Discount 25%</Text>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.offerImage}>
        <Image source={require('../../../src/assests/images/Image.png')} /></View>
      </View>

      {/* Top of Week Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top of Week</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll} onPress={() => navigation.replace('catagery')}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={books}
        renderItem={renderBookItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* Best Vendors Section */}
      <View style={styles.sectionHeader1}>
        <Text style={styles.sectionTitle}>Best Vendors</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll} onPress={() => navigation.replace('vendor')}>See all</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        horizontal
        data={vendors}
        renderItem={renderVendorItem1}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sectionHeader2}>
        <Text style={styles.sectionTitle}>Authors</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll} onPress={() => navigation.replace('authorsdetails')}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={authors}
        renderItem={renderBookItem1}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  offerContainer: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  offerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  discountText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  orderButton: {
    backgroundColor: "#00C853",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  orderButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  offerImage: {
    width: 80,
    height: 140,
    marginLeft: 116,
    borderRadius: 8,


  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionHeader1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 16,
  },
  sectionHeader2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 16,
    color: "#007BFF",
  },
  bookCard: {
    width: 150,
    height: 190,
    marginRight: 16,
  },
  bookCard1: {
    width: 110,
    height: 120,
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
});

export default App;
