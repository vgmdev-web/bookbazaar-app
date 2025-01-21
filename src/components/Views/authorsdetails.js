import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, FlatList, } from "react-native";

const authors = [
  { id: '1', name: 'John Freeman', description: 'American writer he was the editor of the', image: require("../../../src/assests/images/ventor1.png") },
  { id: '2', name: 'Adam Dalva', description: 'He is the senior fiction editor of guernica ma', image: require("../../../src/assests/images/ventor5.png") },
  { id: '3', name: 'Abraham Verghese', description: 'He is the professor and Linda R. Meier and', image: require("../../../src/assests/images/ventor6.png") },
  { id: '4', name: 'Tess Gunty', description: 'Gunty was born and raised in South Bend, Indiana', image: require("../../../src/assests/images/ventor2.png") },
  { id: '5', name: 'Ann Napolitano', description: 'She is the author of the novels A Good Hard', image: require("../../../src/assests/images/ventor7.png") },
  { id: '6', name: 'Hernan Diaz', description: 'Gunty was born and raised in South Bend, Indiana', image: require("../../../src/assests/images/ventor5.png") },
];

const AuthorsScreen = () => {
  const renderAuthor = ({ item }) => (
    <View style={styles.authorItem}>
      <Image source={item.image} style={styles.authorImage} />
      <View style={styles.authorInfo}>
        <Text style={styles.authorName}>{item.name}</Text>
        <Text style={styles.authorDescription}>{item.description}</Text>
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
        <Text style={styles.title}>Authors</Text></TouchableOpacity>
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
        <Text style={styles.subtitle}>Check the authors</Text>
        <Text style={styles.sectionTitle}>Authors</Text>

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
        data={authors}
        keyExtractor={(item) => item.id}
        renderItem={renderAuthor}
        contentContainerStyle={styles.authorList}
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
    marginLeft: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 16,
    marginLeft: 14,
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
  authorList: {
    paddingBottom: 20,
  },
  authorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 7,
  },
  authorImage: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 10,
  },
  authorInfo: {
    flex: 1,
    marginRight: 10,
  },
  authorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 5,
  },
  authorDescription: {
    fontSize: 17,
    color: '#999',
  },
});

export default AuthorsScreen;
