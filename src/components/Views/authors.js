import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const AuthorProfile = () => {
  const products = [
    {
      id: '1',
      title: 'The Da Vinci Code',
      price: '$19.99',
      image: require("./src/assets/images/Frame44.png"),
    },
    {
      id: '2',
      title: 'Carrie Fisher',
      price: '$27.12',
      image: require("./src/assets/images/Frame55.png"),
    },
    {
      id: '3',
      title: 'Carrie Fisher',
      price: '$27.12',
      image: require("./src/assets/images/Frame66.png"),
    },
    {
      id: '4',
      title: 'Carrie Fisher',
      price: '$27.12',
      image: require("./src/assets/images/Frame77.png"),
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
    <View style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
           <TouchableOpacity>
                <Image source={require('./src/assets/images/arrow1.png')} style={{ width: 21, height: 21 }} />
                </TouchableOpacity>
                <TouchableOpacity>
              <Text style={styles.title}>Authors</Text></TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.icon}>🔔</Text>
              </TouchableOpacity>
              
            </View>

      {/* Author Information */}
      <View style={styles.authorSection}>
        <Image style={styles.image} source={require('./src/assets/images/ventor2.png')} />
        <Text style={styles.authorRole}>Novelist</Text>
        <Text style={styles.authorName}>Tess Gunty</Text>

        {/* Star Rating */}
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
      </View>

      {/* About Section */}
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.aboutText}>
        Gunty was born and raised in South Bend, Indiana. She graduated from the University of Notre Dame with a
        Bachelor of Arts in English and from New York University.
      </Text>

      {/* Products Section */}
      <Text style={styles.sectionTitle}>Products</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display items in 2 columns
        columnWrapperStyle={styles.row} // Add spacing between rows
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
  backButton: {
    marginBottom: 16,
  },
  authorSection: {
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 14,
  },
  authorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  authorRole: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  authorName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    marginBottom: 16,
  },
  aboutText: {
    fontSize: 14,
    color: "#7A7A7A",
    marginBottom: 16,
  },
  productContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
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
    width: 100,
    height: 130,
    borderRadius: 8,
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',

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
});

export default AuthorProfile;
