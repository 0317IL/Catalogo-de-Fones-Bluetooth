import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({  
    container:{
        flex: 1,
        backgroundColor: 'white',
      },
      img:{
        width: 200,
        height: 200,
      },
      areaTitle:{
        marginLeft: 10,
        backgroundColor: 'white',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
      },
      title:{
        fontSize: 30,
        color: 'black',
        opacity: 0.7,
        fontFamily: 'BebasNeue_400Regular'
      },
      areatxt:{
        marginBottom: 10
      },
      txt:{
        margin: 30,
        fontSize: 16,
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