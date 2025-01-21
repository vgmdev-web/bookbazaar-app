import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const notifications = [
  {
    id: '1',
    section: 'Current',
    title: 'Carrie Fisher',
    status: 'On the way',
    items: '1 item',
    image: require("./src/assets/images/Frame55.png"),
    statusColor: '#007BFF',
  },
  {
    id: '2',
    section: 'October 2021',
    title: 'The Da Vinci Code',
    status: 'Delivered',
    items: '1 item',
    image: require("./src/assets/images/Frame66.png"),
    statusColor: 'green',
  },
  {
    id: '3',
    section: 'October 2021',
    title: 'Carrie Fisher',
    status: 'Delivered',
    items: '5 items',
    image: require("./src/assets/images/Frame77.png"),
    statusColor: 'green',
  },
  {
    id: '4',
    section: 'October 2021',
    title: 'The Waiting',
    status: 'Cancelled',
    items: '2 items',
    image: require("./src/assets/images/Frame88.png"),
    statusColor: 'red',
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
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={[styles.status, { color: item.statusColor }]}>
                {item.status}
              </Text>
              <Text style={styles.items}>{item.items}</Text>
            </View>
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
        data={['Current', 'October 2021']}
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
    marginTop: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    fontSize: 16,
    color: '#007BFF',
  },
  headerTitle: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 1.6,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
    marginTop: 2,
  },
  items: {
    fontSize: 12,
    color: '#6c757d',
    marginTop: 2,
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
