import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  //const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your sign-up logic here
    // For this example, we'll simply navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
        title="Sign Up"
        onPress={handleSignUp}
        buttonStyle={styles.signupButton}
      />
      <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login
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
  signupButton: {
    backgroundColor: '#007AFF',
    marginTop: 20,
  },
  loginText: {
    marginTop: 16,
    color: '#007AFF',
  },
});

export default SignUpScreen;
