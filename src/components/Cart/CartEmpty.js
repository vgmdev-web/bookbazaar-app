import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from './src/assets/images/empty1.jpg';

const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Cart</Text>
            <Image
                 source={Image} style={styles.bookImage} 
               
            />
            <Text style={styles.emptyText}>There is no products</Text>
        </View>
    );
};

// Dummy components for other tabs
const HomeScreen = () => <Text style={styles.screenText}>Home Screen</Text>;
const CategoryScreen = () => <Text style={styles.screenText}>Category Screen</Text>;
const ProfileScreen = () => <Text style={styles.screenText}>Profile Screen</Text>;

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'Home') iconName = 'home-outline';
                        else if (route.name === 'Category') iconName = 'list-outline';
                        else if (route.name === 'Cart') iconName = 'cart-outline';
                        else if (route.name === 'Profile') iconName = 'person-outline';

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Category" component={CategoryScreen} />
                <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarBadge: 3 }} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cartImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    emptyText: {
        fontSize: 18,
        color: 'gray',
    },
    screenText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default App;
