
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Image } from 'react-native';

const UserListScreen = ({ navigation }) => {
  const [users] = useState([
    { id: 1, username: 'user1', username1: 'Himanshu Raj', email: 'himanshu@gmail.com' } ,
    { id: 2, username: 'user2', username1: 'Ankit Kumar',email: 'ankit@gmail.com' },
    { id: 3, username: 'user3', username1: 'Shivansh Shinha',email: 'shivansh@gmail.com' },
    { id: 4, username: 'user4', username1: 'Rahul Singh',email: 'rahul@gmail.com' },
    { id: 5, username: 'user5', username1: 'John Sinha',email: 'john@gmail.com' },
  ]);

  const handleUserPress = (user) => {
    navigation.navigate('UserDetail', { user });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleUserPress(item)}>
            <Text style={styles.userItem}>{item.username}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  

},
  userItem: {
    fontSize: 18,
    marginBottom: 8,
    color: '#007AFF',
  },
});

export default UserListScreen;