import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../styles';

// ShoppingItems.map((element) => {
//  return(
//    <Text key = {element.name} style = {styles.secondaryText}>   {element.name}, ...)})


    
function toDisplay(expenseList) {
    //My array list is set up so that5 it continuously has stuff in it ecxcept for the last element. 
    // I will check to see if the list has any content in it. once it does, 
    // then I will display the appropoirate emssages. 
    for (let i = 0; i < expenseList.length; i++) {
        if (expenseList[i].trim() !== '') {
            return 'Weekly Expenses So Far:';
        }
    }
    return 'No Expenses Yet!';
}
    
const DisplayExpenses = (props) => {
    return (
        <View style={styles.displayColumnItems}> 
        <Text style={styles.displayMessageTextStyle}> {toDisplay(props.addState.expenses.slice(0, -1))}</Text>
            <FlatList
                data={props.addState.expenses.slice(0, -1)} 
                // needed index as str for error
                keyExtractor={(item, index) => index.toString()} 
                renderItem={(element) => {
                    return (
                        <View style={styles.expenseRow}> 
                            {/* Display Expense Name */}
                            <Text style={styles.expenseRowTextStyle}>{element.item}</Text>

                            {/* Delete Button */}
                            <TouchableOpacity 
                                onPress={() => props.dispatch({ type: 'delete_entry', payload: element.index })}
                            > 
                                
                                <AntDesign name="closecircle" size={28} color="white" />
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default DisplayExpenses;
