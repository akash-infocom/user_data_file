import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const UserList = ({ users }) => {
  return (

    <View style={styles.container} >
      <Text style={styles.title} ></Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.userItem}>
              <Text>Name: {item.name}</Text>
              <Text>Age: {item.age}</Text>

              <Text>Gender: {item.selectedGender}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Address: {"\n"}
                <Text>  Area : {item.area},
                </Text>
                <Text>  City : {item.city}, </Text>
                <Text>  State :  {item.state}, </Text>
                <Text> Pin Code:  {item.pinCode}</Text>

              </Text>
              <Text>Hobby: {item.hobby}</Text>
            </View>
          </View>
        )}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {

    padding: 5,
    backgroundColor: '#d3d3d3',
    headerTitleAlign: "center",
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#dcdcdc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },


  userItem: {
    marginBottom: 10,
    padding: 10,
    borderColor: '#ffcc00',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default UserList;