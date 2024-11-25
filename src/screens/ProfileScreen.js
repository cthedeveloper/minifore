import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ProgressBarAndroid } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Avatar/Image Upload */}
      <TouchableOpacity style={styles.avatarContainer}>
        {/* Display uploaded image or default avatar */}
        <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
        {/* Edit icon */}
        <MaterialIcons name="edit" size={24} color="#003f39" style={styles.editIcon} />
      </TouchableOpacity>
      
      {/* Badge Icon */}
      <View style={styles.badgeContainer}>
        {/* Badge icon */}
        <MaterialIcons name="star" size={40} color="#8ab244" />
        <Text style={styles.badgeText}>Gold Planter</Text>
      </View>
      
      {/* Progress Bar */}
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressLabel}>Next Milestone</Text>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.6} color="#8ab244" />
      </View>
      
      {/* Personal Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.column}>
          <Text style={styles.detailLabel}>Personal Details</Text>
          <Text style={styles.detailText}>First Name: John</Text>
          <Text style={styles.detailText}>Last Name: Doe</Text>
          <Text style={styles.detailText}>Email: johndoe@example.com</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.detailLabel}>&nbsp;</Text>
          <Text style={styles.detailText}>Address: 123 Main St, City, Country</Text>
          <Text style={styles.detailText}>Phone Number: +1234567890</Text>
          <Text style={styles.detailText}>Date Registered: April 21, 2024</Text>
        </View>
      </View>
      
      {/* Edit Details Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit My Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 20,
  },
  badgeContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  badgeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8ab244',
  },
  progressBarContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  progressLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  column: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#8ab244',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
