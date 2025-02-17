import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles';

// ShoppingItems.map((element) => {
//  return(
//    <Text key = {element.name} style = {styles.secondaryText}>   {element.name}, ...)})

const DisplayExpenses = (props) => {
    return (
        <View style={styles.displayColumnItems}> 
        {props.addState.expenses
            .slice(0, -1)  // Excludes the last element from display
            .map((element, index) => (
                <View key={index} style={styles.expenseRow}> 
                    {/* Element with styled text */}
                    <Text style={styles.expenseRowTextStyle}>{element}</Text>

                    {/* Delete Button for Each Item */}
                    <TouchableOpacity 
                        style={styles.smallButton} 
                        onPress={() => props.dispatch({ type: 'delete_entry', payload: index })}
                    > 
                        <Text style={styles.smallTextStyle}>DEL</Text>
                    </TouchableOpacity>
                </View>
            ))
        }
    </View>
    );
};

export default DisplayExpenses;
