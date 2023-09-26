

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Detail</Text>
      <Text>Username: {user.username1}</Text>
      <Text>Email: {user.email}</Text>
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
});

export default UserDetailScreen;
