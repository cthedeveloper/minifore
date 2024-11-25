import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = useRef([]);

  const handleInputChange = (text, index) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Automatically focus on the next input box
      if (text.length === 1 && index < 3) {
        otpInputs.current[index + 1].focus();
      }
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
  };

  const handleCreateAccount = () => {
    // Navigate to the create account screen
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Enter OTP</Text>
        <View style={styles.inputContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={value}
              onChangeText={(text) => handleInputChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={(input) => (otpInputs.current[index] = input)}
            />
          ))}
        </View>
        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        {/* Create Account */}
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#003f39', // Change text color
    textAlign: 'center',
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

export default OTPScreen;
