import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity class="backspace-arrow"></TouchableOpacity>
      <Text style={styles.header}>Last opened books</Text>
      <View style={styles.booksContainer}>
        <View style={styles.book}>
          <Image
            source={require('./src/assets/images/book1.png')} 
          />
          <Text style={styles.bookTitle}>Holly</Text>
        </View>
        <View style={styles.book}>
          <Image
            source={require('./src/assets/images/book22.png')} 
            
          />
          <Text style={styles.bookTitle}>Harry Potter and the Philo...</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.showAllButton}>
              <Text style={styles.showAllButtonText}>▼ Show all 27 books</Text>
            </TouchableOpacity>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add new book</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  
  header: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center'
  },
  booksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  book: {
    alignItems: 'center',
    width: 150,
  },
  bookImage: {
    width: 120,
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  bookTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#7F3DFF',
    paddingVertical: 12,
    marginTop: 350,
    borderRadius: 8,
    alignItems: 'center',
  },
  showAllButton: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  showAllButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',

  },
});

export default App;