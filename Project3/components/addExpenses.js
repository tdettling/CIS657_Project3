import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from '../styles';

const AddExpenses = (props) => {
    const [inputText, setInputText] = useState('');

    return (
        <View style={styles.addExpensesContainer}> 
            <View style={styles.rowInput}> 
                <TextInput 
                    style={styles.textInputStyle}
                    placeholder=" Enter Expense Entry "
                    placeholderTextColor="black"
                    value={inputText}
                    onChangeText={(newValue) => {
                        setInputText(newValue);
                        props.dispatch({ type: props.actionType, payload: newValue });
                    }}
                />
            </View>

            <View style={styles.buttonSection}> 
                <TouchableOpacity 
                    style={styles.buttonStyle}  
                    onPress={() => { 
                        if (props.addState.expenses.length > 0) {
                            const lastExpense = props.addState.expenses[props.addState.expenses.length - 1];
                            props.dispatch({ type: 'add_entry', payload: lastExpense });
                            setInputText('');
                        }
                    }}
                > 
                    <Text style={styles.buttonTextStyle}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonStyle} 
                    onPress={() =>{props.toggleView()} }
                > 
                    <Text style={styles.buttonTextStyle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddExpenses;
