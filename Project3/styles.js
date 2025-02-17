// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1, 
    backgroundColor: '#002ddb', 
    borderColor: 'black',
    borderWidth: 4,
    paddingTop: 57, 
    alignItems: 'center', 
  },

  titleTextStyle: {
    flexDirection: 'row',
    backgroundColor: '#002ddb',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    color: '#fff', 
    fontFamily: 'Verdana', 
    fontSize: 30, 
    fontWeight: 'bold', 
    margin: 5,
  }, 

  inputComponentStyle: {
    flex: 1, 
    borderWidth: 2,
    marginTop: 40,
    paddingTop: 40, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle: {
    flex: 2, 
    borderWidth: 2, 
    alignItems: 'center',
  },

  box2: {
    borderWidth: 50, 
    height: 50, 
  },

  smallTextStyle: {
    color: '#fff', 
    fontFamily: 'Verdana', 
    fontSize: 20
  },

  textInputStyle: {
    color: '#000000', 
    fontFamily: 'Verdana', 
    fontSize: 13,
    fontStyle: 'italic',
    height: 40,
    margin: 11,
    borderWidth: 5,
    padding: 8,
    backgroundColor: '#DDDDDD',
    paddingLeft: 30, 
    paddingRight:60,
    flexDirection: 'row'
   }, 

 buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1a0b0',
    padding: 3,
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 90, 
    height: 90, 
    margin: 5,
},

  buttonTextStyle: {
    color: '#000000', 
    fontFamily: 'Verdana', 
    fontSize: 15
  },

  buttonSection:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, 

  inputSection:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  displaySection:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },

  displayRowedItems:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  rowInput:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryTextStyle: {
    color: '#fff', 
    fontFamily: 'Verdana', 
    fontSize: 15
  }, 

smallButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1a0b0',
    padding: 2,  
    borderWidth: 2, 
    borderTopLeftRadius: 6,  
    borderTopRightRadius: 6,  
    width: 50,
    height: 50,  
    margin: 3, 

}
});

export default styles;
