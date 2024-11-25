import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AddNewTree = () => {
  const [tab, setTab] = useState('One-Time'); // State to track active tab
  const [treeName, setTreeName] = useState('');
  const [treeType, setTreeType] = useState('');
  const [duration, setDuration] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');

  const handleTabChange = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <View style={styles.container}>
      {/* Tab buttons */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, tab === 'One-Time' && styles.activeTab]}
          onPress={() => handleTabChange('One-Time')}
        >
          <Text style={styles.tabText}>One-Time</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'Mini-Forest' && styles.activeTab]}
          onPress={() => handleTabChange('Mini-Forest')}
        >
          <Text style={styles.tabText}>Mini-Forest</Text>
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tree Name"
          value={treeName}
          onChangeText={setTreeName}
        />
        <TextInput
          style={styles.input}
          placeholder="Type of Tree"
          value={treeType}
          onChangeText={setTreeType}
        />
        <TextInput
          style={styles.input}
          placeholder="Duration (Years)"
          keyboardType="numeric"
          value={duration}
          onChangeText={setDuration}
        />
        <TextInput
          style={styles.input}
          placeholder="Monthly Contribution"
          keyboardType="numeric"
          value={monthlyContribution}
          onChangeText={setMonthlyContribution}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#012622',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#9d9c24',
  },
  activeTab: {
    borderBottomColor: '#689f38',
  },
  tabText: {
    fontWeight: 'bold',
    color: '#9d9c24',
  },
  formContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#9d9c24',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#9d9c24',
    backgroundColor: '#012622',
  },
});


export default AddNewTree;
