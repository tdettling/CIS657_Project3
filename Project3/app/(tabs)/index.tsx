import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useReducer, useState } from 'react';
import styles from '../../styles';
import addExpenses from '../../components/addExpenses';
import displayExpenses from '../../components/displayExpenses';

const displayReducer = (displayState, action) => {
  return displayState;
}


export default function App() {
  // obj
  const [displayState, displayDispatch] = useReducer(displayReducer, {
    subjects: [0, 0, 0, 0, 0],
    min:0, 
    max:0, 
    avg:0, 
    grade: 'F'
  });


  return (
    <View style={styles.rootStyle}>
      {/* Add Expenses Section*/}
      <View>


      </View>


      {/* Display Expenses Section */}
      <View>
        <Text> Display Section fixme</Text>
        
      </View>

    </View>
  );
}



