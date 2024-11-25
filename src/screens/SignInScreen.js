import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Perform sign-in logic here
    // For demonstration purposes, let's navigate to the Home screen
    navigation.navigate({ navigator: 'MainScreen', route: 'Home', key:'Home' }) 
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
  };

  const handleCreateAccount = () => {
    // Navigate to the create account screen
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#000" 
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#000" // Change placeholder text color
        />
        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        {/* Create Account */}
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Add background overlay
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.8)', // Semi-transparent white background
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003f39', // Change title color
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#003f39', // Change text color
  },
  signInButton: {
    backgroundColor: '#458B00',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#003f39',
    textAlign: 'center',
    marginTop: 10,
  },
  createAccountText: {
    color: '#003f39',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
