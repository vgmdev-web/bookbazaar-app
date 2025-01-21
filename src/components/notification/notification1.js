import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const notifications = [
  {
    id: '1',
    section: 'October 2021',
    type: 'Promotion',
    title: 'Today 50% discount on all Books in Novel category with online orders worldwide.',
    time: 'Oct 21 • 08:00',
    typeColor: 'green',
  },
  {
    id: '2',
    section: 'October 2021',
    type: 'Promotion',
    title: 'Buy 2 get 1 free for selected books from 08 - 10 October 2021.',
    time: 'Oct 08 • 20:30',
    typeColor: 'green',
  },
  {
    id: '3',
    section: 'September 2021',
    type: 'Information',
    title: 'There is a new book now available.',
    time: 'Sept 16 • 11:00',
    typeColor: 'blue',
  },
];

const NotificationScreen = () => {
  const renderSection = (sectionTitle) => {
    const sectionData = notifications.filter(
      (notification) => notification.section === sectionTitle
    );

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{sectionTitle}</Text>
        {sectionData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={[styles.type, { color: item.typeColor }]}>
              {item.type}
            </Text>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
<TouchableOpacity>
          <Text style={styles.backButton}><Image source={require('./src/assets/images/arrow1.png')} style={{ width: 21, height: 21 }} /></Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 50 }} /> {/* Placeholder for alignment */}
      </View>

      {/* Content */}
      <FlatList
        data={['October 2021', 'September 2021']}
        keyExtractor={(item) => item}
        renderItem={({ item }) => renderSection(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  type: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  time: {
    fontSize: 12,
    color: '#6c757d',
  },
});

export default NotificationScreen;
