import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, Modal, ImageBackground } from 'react-native';
import { useReducer, useState } from 'react';
import styles from '../../styles';
import AddExpenses from '../../components/addExpenses';
import DisplayExpenses from '../../components/displayExpenses';
import { FlatList } from 'react-native-gesture-handler';


const addReducer = (addState, action) => {
  let expenses_temp = [...addState.expenses];

  switch (action.type) {
    case 'update_new_expense':
      // if we haven't added any entries yet, 
      // the list will be empty and will not have 
      // a last index to update. 
      if (expenses_temp.length == 0){
        expenses_temp.push('empty');
      }
      let lastIndex = expenses_temp.length - 1;
      expenses_temp[lastIndex] = action.payload;
      //expenses_temp.push(action.payload);
      console.log(expenses_temp);
      return { ...addState, expenses: expenses_temp };

    case 'add_entry':
      // entry is done being edited aft6er add buytton is pushed
      //adding a new blank element to our list, unlocked fo editing
      console.log("add button pushed")
      expenses_temp.push('');
      console.log(expenses_temp);
      return { ...addState, expenses: expenses_temp };

    case 'delete_entry':
      // payload is index to delete. 
      expenses_temp.splice(action.payload, 1);
      return { ...addState, expenses: expenses_temp };


    default:
      return addState;
  }
}; 



export default function App() {

  const [addState, addDispatch] = useReducer(addReducer, {
    expenses: [''],
  });

  const [modalFlag, setModalFlag] = useState(false)
  const [message, setMessage] = useState('No Expenses Yet!')

  return (
    <View style={styles.rootStyle}>
      <ImageBackground style={styles.backgroundStyle}
      source={require('../../assets/images/background.jpg')}>

              <View> 
                          <TouchableOpacity 
                              style={styles.titleButtonStyle}  
                              onPress={() => setModalFlag(true)}>
                              <Text style={styles.titleButtonTextStyle}>My-Expenses</Text>
                          </TouchableOpacity>
              </View>

          <Modal visible = {modalFlag} animationType='slide'> 
          <ImageBackground style={styles.backgroundStyle}
            source={require('../../assets/images/background.jpg')}>

            <View style={styles.rootStyle}>
                  <Text style={styles.titleTextStyle}>
                    Weekly Expenses!
                  </Text>


                  {/* Add Expenses Section */}
                  <View>
                    <AddExpenses 
                      style={styles.inputComponentStyle}
                      dispatch={addDispatch}
                      actionType="update_new_expense"
                      addState={addState}
                      toggleView = { () => setModalFlag(false)}
                    />
                  </View>

                  {/* Display Expenses Section */}

                  <View>
                      <DisplayExpenses 
                      dispatch={addDispatch}
                      addState={addState} 
                      changeMessage = {setMessage}
                      />
                  </View>
                </View>
            </ImageBackground>
        </Modal>
    </ImageBackground>
    </View>
  );
}
