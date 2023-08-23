import React, { useState } from 'react';
import { View, gender, TextInput, Button, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import GenderRadioButton  from './GenderRadioButton';

const UserForm = ({ addUser, navigation }) => {
  const [name, setName] = useState('');


  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
 // const [gender, setGender] = useState('');
  const [selectedGender, setGender] = useState('');
  const [area, setArea] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [hobby, setHobby] = useState('');
  const handleGenderSelect = (gender) => {
    setGender(gender);
  };

  const handleAddUser = () => {
    if (name && email && age && selectedGender && area && pinCode && city && state && hobby) {
      addUser({ name, email, age, selectedGender, area, pinCode, city, state, hobby });
      setName('');
      setEmail('');
      setAge('');
      setGender('');
      setArea('');
      setPinCode('');
      setCity('');
      setState('');
      setHobby('');
      navigation.navigate('UserList');
    }
  };

  return (

    <View style={{ backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>



          <Text style={styles.txtstyle}>Name:</Text>

          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#dcdcdc"
          />

          <Text style={styles.txtstyle}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholderTextColor="#dcdcdc"
          />
          <Text style={styles.txtstyle}>Age:</Text>
          <TextInput
            style={styles.input}
            label=" Date of Birth"
            placeholder="Enter Your Age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            placeholderTextColor="#dcdcdc"

          />
           <Text>Selected Gender: {selectedGender}</Text>
      <GenderRadioButton onGenderSelect={handleGenderSelect} />
          
          <Text style={styles.txtstyle}>Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="Area"
            value={area}
            onChangeText={setArea}
            placeholderTextColor="#dcdcdc"
          />
          <TextInput
            style={styles.input}
            placeholder="Pin Code"
            value={pinCode}
            onChangeText={setPinCode}
            keyboardType="numeric"
            placeholderTextColor="#dcdcdc"

          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
            placeholderTextColor="#dcdcdc"
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            onChangeText={setState}
            placeholderTextColor="#dcdcdc"
          />
          <Text style={styles.txtstyle}>
            Hobbies:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Hobbies"
            value={hobby}
            onChangeText={setHobby}
            placeholderTextColor="#dcdcdc"
          />

        </View>
        <Button title="Register" onPress={handleAddUser} color="#ffa500" borderRadius="55" marginTop="10" />
      </ScrollView>
    </View>


  );
};
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '100%',
    marginTop: 20,
    // backgroundColor: `#d3d3d3`,
  },
  input: {
    // margin: 5,
    padding: 3,
    // borderWidth: 0.5,
    borderWidth: 1,  // size/width of the border
    borderColor: 'lightgrey',
    borderRadius: 4,
    width: '100%',
    backgroundColor: `#fafafa`,
    color: "#000000",
    padding: 5,
    paddingLeft: 12,
    marginBottom: 20,
  },


  label: {
    fontWeight: "bold",
    // marginBottom: 10,
  },
  picker: {
    width: 200,
    height: 40,
  },
  txtstyle: {
    color: '#5e5e5a',
    fontSize: 12,
  },

});

export default UserForm;