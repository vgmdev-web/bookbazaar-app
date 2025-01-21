import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList, } from "react-native";

const vendors = [
  {
    id: "1",
    name: "Wattpad",
     image: require("../../../src/assests/images/vn1.png"),
    rating: 4,
  },
  {
    id: "2",
    name: "Kuromi",
     image: require("../../../src/assests/images/vn2.png"),
    rating: 5,
  },
  {
    id: "3",
    name: "Crane & Co.",
    image: require("../../../src/assests/images/vn3.png"),
    rating: 4,
  },
  {
    id: "4",
    name: "GoodDay",
    image: require("../../../src/assests/images/vn4.png"),
    rating: 5,
  },
  {
    id: "5",
    name: "Warehouse",
    image: require("../../../src/assests/images/vn5.png"),
    rating: 3,
  },
  {
    id: "6",
    name: "Peppa Pig",
    image: require("../../../src/assests/images/vn6.png"),
    rating: 5,
  },
  {
    id: "7",
    name: "Jstor",
    image: require("../../../src/assests/images/vn7.png"),
    rating: 4,
  },
  {
    id: "8",
    name: "Peloton",
    image: require("../../../src/assests/images/vn8.png"),
    rating: 4,
  },
  {
    id: "9",
    name: "Haymarket",
    image: require("../../../src/assests/images/vn9.png"),
    rating: 5,
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.rating}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Text key={index} style={index < item.rating ? styles.starFilled : styles.star}>
            ★
          </Text>
        ))}
      </View>
    </View>
    );
  return (
    
    <ScrollView style={styles.container}>
      
     <View style={styles.header}>
     <TouchableOpacity>
          <Image source={require('../../../src/assests/images/arrow1.png')} style={{ width: 21, height: 21 }} />
          </TouchableOpacity>
          <TouchableOpacity>
        <Text style={styles.title}>Vendords</Text></TouchableOpacity>
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
      
        <View>
        <Text style={styles.subtitle}>Our Vendors</Text>
        <Text style={styles.sectionTitle}>Vendors</Text>

        <View style={styles.container3}>
      <View style={styles.tabItem}>
        <Text style={[styles.text, styles.activeText]}>All</Text>
        <View style={styles.activeIndicator} />
      </View>
      <View style={styles.tabItem}>
        <Text style={styles.text}>Books</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={styles.text}>Poems</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={styles.text}>Special for you</Text>
      </View>
      <View style={styles.tabItem}>
        <Text style={styles.text}>Stationery</Text>
      </View>
    </View>


      </View>
      <FlatList
      data={vendors}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={3}
      contentContainerStyle={styles.container}
      columnWrapperStyle={styles.row}
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


  container3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 50,
  },
  tabItem: {
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#999',
  },
  activeText: {
    fontWeight: 'bold',
    color: '#000',
  },
  activeIndicator: {
    height: 2,
    backgroundColor: 'green',
    width: '100%',
    marginTop: 4,
  },
});

export default App;
