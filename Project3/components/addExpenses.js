import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles';

AddExpenses = (props) => {

    return(
        <View> 
            <View style={styles.rowInput}> 
                <TextInput 
                    style={styles.textInputStyle}
                    placeholder=' Enter Expense Entry '
                    placeholderTextColor='black'
                    onChangeText={(newValue) => props.dispatch({ type: props.actionType, payload: newValue })}
                />
            </View>

            <View style={styles.buttonSection}> 
                {/* Add */}
                <TouchableOpacity style={styles.buttonStyle}> 
                <Text style={styles.buttonTextStyle} 
                    onPress={ () => { 
                        if (props.addState.expenses.length > 0) {
                        const lastExpense = props.addState.expenses[props.addState.expenses.length - 1];
                        props.dispatch({ type: 'add_entry', payload: lastExpense });
                    }
                }}>
                    ADD
                </Text>
                </TouchableOpacity>

                {/* cancel*/}
                {/* Add */}
                <TouchableOpacity style={styles.buttonStyle}> 
                <Text style={styles.buttonTextStyle} 
                    onPress={ () => { 
                        props.addDispatch( { type: 'cancel', payload: ''})
                    }}>
                    Cancel
                </Text>
                </TouchableOpacity>
            </View>
                
        </View>
    );
};


  
export default AddExpenses;