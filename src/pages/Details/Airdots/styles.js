import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'white',
      width: '100%',
    },
    img:{
      width: '100%',
      height: 350,
      margin: 10,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
      flex:1
    },
    area:{
      marginHorizontal: 30,
      flex: 1
    },
    name:{
      fontSize: 30,
      fontWeight:'bold',
      color: '#000',
      opacity: 0.75,
    },
    price:{
      fontSize: 25,
      color: 'red',
      opacity: 0.9
    },
    dot:{
      flexDirection: 'row',
      marginVertical: '7%',
      marginLeft: 30,
    },
    areaTitle:{
      alignItems: 'center',
      backgroundColor: 'white',
      paddingVertical: 15
    },
    title:{
      fontSize: 23,
      fontFamily: 'BebasNeue_400Regular',
      opacity: 0.85
    },
    areaTxt:{
      padding: 15,
      alignItems: 'center'
    },
    txt:{
      fontSize: 16
    },
    lineTop:{
      marginTop: 20, 
      borderTopColor: '#D8d8d8',
      borderTopWidth: 2,
      marginBottom: 5,
      opacity: 0.4
    },
    lineBottom:{
      borderBottomColor: '#D8d8d8',
      borderBottomWidth: 2,
      marginBottom: 5,
      elevation: 3,
    } 
  });
  export default styles;