import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Modal } from 'react-native'; // Import Modal separately
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AddNewTree from './AddNewTree';


// Sample data for tree list
const treeData = [
  { id: '1', name: 'My Trees', imageUrl: require('../../assets/MyTree.png') },
  { id: '2', name: 'Manage My Forest', imageUrl: require('../../assets/homebackground.jpg') },
  // Add more tree data as needed
];

const carouselData = [
  { id: '1', imageUrl: require('../../assets/homebackground.jpg'), description: 'Description for card 1' },
  { id: '2', imageUrl: require('../../assets/homebackground.jpg'), description: 'Description for card 2' },
  { id: '3', imageUrl: require('../../assets/homebackground.jpg'), description: 'Description for card 3' },
];

const HomeScreen = () => {

  const navigation = useNavigation(); // Initialize useNavigation hook
  const [isSignInOpen, setIsSignInOpen] = useState(false); // State for managing the visibility of the dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing the visibility of the menu
  const [isAddNewTreeOpen, setIsAddNewTreeOpen] = useState(false); // State for managing the visibility of AddNewTree

  // Function to navigate to SignIn screen
  const navigateToSignIn = () => {
    navigation.navigate('SignIn');
    setIsSignInOpen(false); // Close the dropdown after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <Image source={item.imageUrl} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardText}>{item.description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuToggle} onPress={toggleMenu}>
          <MaterialIcons name="menu" size={24} color="#003f39" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Consava</Text>
        <TouchableOpacity style={styles.notification}>
          <Ionicons name="notifications-outline" size={24} color="#003f39" />
        </TouchableOpacity>

        <Modal
          visible={isSignInOpen}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setIsSignInOpen(false)}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalBackground} onPress={() => setIsSignInOpen(false)} />
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.modalItem} onPress={navigateToSignIn}>
                <Text style={styles.modalItemText}>Sign In</Text>
              </TouchableOpacity>
              {/* Add more dropdown items as needed */}
            </View>
          </View>
        </Modal>
        {/* Menu dropdown modal */}
        <Modal
          visible={isMenuOpen}
          transparent={true}
          animationType="fade"
          onRequestClose={toggleMenu}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.modalBackground} onPress={toggleMenu} />
            <View style={styles.menuContent}>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Tree History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Forest History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>My Community</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuItemText}>Payment History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem} onPress={() => setIsSignInOpen(true)}>
                <Text style={styles.menuItemText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hello Cris</Text>

      {/* Filter Links */}
      <View style={styles.filterLinks}>
        <TouchableOpacity style={styles.filterLink}>
          <Text style={styles.filterLinkText}>Recommended</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterLink}>
          <Text style={styles.filterLinkText}>Top</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterLink}>
          <Text style={styles.filterLinkText}>Indoor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterLink}>
          <Text style={styles.filterLinkText}>Outdoor</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for trees..."
        placeholderTextColor="#003f39"
      />
       <FlatList
        data={treeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.treeItem}>
            <Image source={item.imageUrl} style={styles.treeImage} />
            <Text style={styles.treeName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        contentContainerStyle={styles.treeList}
      />

      {/* Carousel */}
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={250}
        layout="default"
        loop={true}
      />

      {/* Floating Action Button (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setIsAddNewTreeOpen(true)} // Open AddNewTree modal on press
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>

      {isAddNewTreeOpen && (
        <View style={styles.addNewTreeModal}>
          <AddNewTree />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003f39',
  },
  menuToggle: {
    padding: 5,
  },
  notification: {
    padding: 5,
  },
  signInButton: {
    padding: 10,
  },
  signInButtonText: {
    color: '#003f39',
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003f39',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  filterLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  filterLink: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#003f39',
  },
  filterLinkText: {
    color: '#003f39',
  },
  searchBar: {
    backgroundColor: '#78909c',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    bordercolor: '#6dbae7',
    marginBottom: 20,
    color: 'white',
  },
  treeList: {
    paddingHorizontal: 10,
  },
  treeItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  treeImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  treeName: {
    marginTop: 10,
    color: '#003f39',
    fontWeight: 'bold',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#8ab244',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabText: {
    fontSize: 24,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  modalItem: {
    padding: 10,
  },
  modalItemText: {
    color: '#003f39',
    fontWeight: 'bold',
  },
  menuContent: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    marginTop: 40,
  },
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    color: '#003f39',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    elevation: 5,
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1, // Take remaining space
    marginLeft: 10, // Add some spacing between image and text
  },
  cardText: {
    color: '#003f39',
    fontWeight: 'bold',
  },
  addNewTreeModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default HomeScreen;
