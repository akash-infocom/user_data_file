import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const GenderRadioButton = ({ onGenderSelect }) => {
  const [gender, setGender] = useState('male');

  const handleGenderChange = (value) => {
    setGender(value);
    onGenderSelect(value); // Notify parent component
  };

  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={handleGenderChange} value={gender}>
      <View style={styles.radioButtonContainer}>
          <RadioButton value="male" />
          <Text>Male</Text>
          <View style={styles.radioButtonContainer}>
            <RadioButton value="female" />
            <Text>Female</Text>
          </View>
      </View>
        
        
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange elements horizontally
  },
  radioButtonContainer: {
    flexDirection: 'row', // Arrange radio button and text horizontally
    alignItems: 'center', // Center items vertically
    marginRight: 20, // Add spacing between radio buttons
  },
});


export default GenderRadioButton;
