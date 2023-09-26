import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Implement your authentication logic here (e.g., API call)
    // For this example, we'll simply check if email and password match
    if (username === 'Himanshu' && password === '123') {
      navigation.navigate('UserList');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };
  

  const navigateToSignUp = () => {
    // Add navigation to the sign-up screen if needed
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Username"
        leftIcon={{ type: 'font-awesome', name: 'user' }}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button
        title="Login"
        onPress={handleLogin}
        buttonStyle={styles.loginButton}
      />
      <Text style={styles.signupText} onPress={navigateToSignUp}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    marginTop: 20,
  },
  signupText: {
    marginTop: 16,
    color: '#007AFF',
  },
});

export default LoginScreen;