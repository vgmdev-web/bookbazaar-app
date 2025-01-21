import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const files = [
  { id: '1', name: 'pg71543-images', date: '06:37', size: '15.2 MB', type: 'epub', icon: require('./src/assets/images/book1.png') },
  { id: '2', name: 'audio-sample', date: '19.05.2023', size: 'iCloud Drive', type: 'audio', icon: require('./src/assets/images/book2.png') },
  { id: '3', name: 'PDF document', date: '02.02.2023', size: 'iCloud Drive', type: 'pdf', icon: require('./src/assets/images/book3.png') },
  { id: '4', name: 'Rules of the Game', date: '28.12.2022', size: 'iCloud Drive', type: 'pdf', icon: require('./src/assets/images/book4.png') },
  { id: '5', name: 'Notice', date: '28.12.2022', size: 'iCloud Drive', type: 'pdf', icon: require('./src/assets/images/book5.png') },
  { id: '6', name: 'IMG_6690', date: '21.05.2022', size: 'iPhone', type: 'image', icon: require('./src/assets/images/book6.png') },
  { id: '7', name: 'IMG_6693', date: '21.05.2022', size: 'iPhone', type: 'image', icon: require('./src/assets/images/book7.png') },
  { id: '8', name: 'IMG_6709', date: '21.05.2022', size: 'iPhone', type: 'image', icon: require('./src/assets/images/book8.png') },
  { id: '9', name: 'IMG_6712', date: '21.05.2022', size: 'iPhone', type: 'image', icon: require('./src/assets/images/book9.png') },
];

export default function FileManager() {
  const renderFileItem = ({ item }) => (
    <TouchableOpacity style={styles.fileItem}>
      <Image source={item.icon} style={styles.fileIcon} />
      <Text style={styles.fileName} numberOfLines={2}>
        {item.name}
      </Text>
      <Text style={styles.fileDetails}>
        {item.date} | {item.size}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <View style={styles.arrow} />
        </View>
        <Text style={styles.headerTitle}>Recent</Text>
        <View style={styles.headerActions}>
          <View style={styles.gridIcon}>
            <View style={styles.gridRow}>
              <View style={styles.gridSquare} />
              <View style={styles.gridSquare} />
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridSquare} />
              <View style={styles.gridSquare} />
            </View>
          </View>
          <Text style={styles.cancelText}>Cancel</Text>
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
      <Image source={require('./src/assets/images/search.png')}
                  style={{ width: 25, height: 25, }} 
                />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Grid View */}
      <FlatList
        data={files}
        renderItem={renderFileItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.fileGrid}
      />
      <View style={styles.container1}>
      {/* Recent Tab */}
      <TouchableOpacity style={styles.tab}>
        <Image source={require('./src/assets/images/history.png')}
                  style={{ width: 25, height: 25, }} 
                />
        <Text style={[styles.label, styles.activeLabel]}>Recent</Text>
      </TouchableOpacity>

      {/* General Tab */}
      <TouchableOpacity style={styles.tab}>
      <Image source={require('./src/assets/images/folder.png')}
                  style={{ width: 25, height: 25, }} 
                />
        <Text style={styles.label}>General</Text>
      </TouchableOpacity>

      {/* Docs Tab */}
      <TouchableOpacity style={styles.tab}>
      <Image source={require('./src/assets/images/documentation.png')}
                  style={{ width: 25, height: 25, }} 
                />
        <Text style={styles.label}>Docs</Text>
      </TouchableOpacity>
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2E2E2E',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
  },
  backButton: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    width: 12,
    height: 12,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#2E2E2E',
    transform: [{ rotate: '45deg' }],
  },
  gridIcon: {
    flexDirection: 'column',
    marginRight: 10,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  gridSquare: {
    width: 5,
    height: 5,
    backgroundColor: '#fff',
    margin: 2,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    margin: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#A9A9A9',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  fileGrid: {
    paddingHorizontal: 10,
    
  },
  fileItem: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#2E2E2E',
    padding: 19,
    borderRadius: 10,
    maxWidth: '30%',
  },
  fileIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  fileName: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  fileDetails: {
    color: '#A9A9A9',
    fontSize: 10,
    textAlign: 'center',
  },

  container1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#2E2E2E',
  },
  tab: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#A9A9A9',
    marginBottom: 5,
  },
  activeIcon: {
    backgroundColor: '#4A90E2', // Active icon color (blue)
  },
  label: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  activeLabel: {
    color: '#4A90E2', // Active label color (blue)
  },


});
