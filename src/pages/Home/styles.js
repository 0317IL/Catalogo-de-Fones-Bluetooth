import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({    
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
      },
      logo:{
        width: 100,
        height: 100,
        margin: 10,
        padding: 3
      },
      txtContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
      },
      txt:{
        fontFamily: 'BebasNeue_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
      },
      description:{
        margin: 2,
        padding: 5,
      },
      txtDescription:{
        fontSize: 16,
      },
      buttom:{
        backgroundColor: 'black',
        width: 80,
        height: 30,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 5
      },
      itemStyle:{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        flex: 1,
        margin: 1
      },
      txtItem:{
        color: 'white',
        fontSize: 30,
      },
      line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
        marginBottom: 5,
        elevation: 3,
      } 
})
export default styles;