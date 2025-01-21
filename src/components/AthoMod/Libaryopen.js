import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const data = [
  { id: '1', title: 'Holly', image: require('./src/assets/images/book1.png') },
  { id: '2', title: 'Lost Things', image: require('./src/assets/images/book22.png') },
  { id: '3', title: 'The Wager', image: require('./src/assets/images/book3.png') },
  { id: '4', title: 'Sapiens', image: require('./src/assets/images/book4.png') },
  { id: '5', title: 'The In-Between', image: require('./src/assets/images/book5.png') },
  { id: '6', title: 'Solitaire', image: require('./src/assets/images/book6.png') },
  { id: '7', title: 'Solitaire', image: require('./src/assets/images/book7.png') },
  { id: '8', title: 'Solitaire', image: require('./src/assets/images/book8.png') },
  { id: '9', title: 'Solitaire', image: require('./src/assets/images/book9.png') },
  { id: '10', title: 'Solitaire', image: require('./src/assets/images/book10.png') },
];

const Libaryopen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    setBooks(data);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.bookItem}>
      <Image source={item.image} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add New Book</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18191A',
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  bookItem: {
    flex: 1,
    margin: 5,
  },
  bookImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  bookTitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Libaryopen;