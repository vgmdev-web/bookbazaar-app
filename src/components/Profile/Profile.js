import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    const handleLogout = () => {
       
        alert('Logged out successfully!');
    };

    const handleNavigation = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        
        <View style={styles.container}>
           <Text style={styles.menuText1}>Profile</Text>
            <View style={styles.profileHeader}>
                <Image 
                    source={require('./src/assets/images/book1.png')} 
                    style={styles.profileImage} 
                />
                <View>
                    <Text style={styles.profileName}>John Doe</Text>
                    <Text style={styles.phoneNumber}>(+1) 234 567 890</Text>
                </View>
                <TouchableOpacity onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Account')}>
                <Text style={styles.menuText}>My Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Address')}>
                <Text style={styles.menuText}>Address</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Offers')}>
                <Text style={styles.menuText}>Offers & Promos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Favorites')}>
                <Text style={styles.menuText}>Your Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('OrderHistory')}>
                <Text style={styles.menuText}>Order History</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('HelpCenter')}>
                <Text style={styles.menuText}>Help Center</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    phoneNumber: {
        fontSize: 14,
        color: 'gray',
    },
    logoutText: {
        marginLeft: '120',
        color: 'red',
        fontWeight: 'bold',
    },
    menuItem: {
        
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    menuText: {
        fontSize: 16,
    },
    menuText1: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 40,
  },
});

export default ProfileScreen;
