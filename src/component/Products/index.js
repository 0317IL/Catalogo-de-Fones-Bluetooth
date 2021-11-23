import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Products(props) {
 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
       <Image 
        source={{uri: props.img}}
        style={styles.img}
       />
       <Text style={styles.name}>{props.name}</Text>
       <Text style={styles.price}>{props.price}</Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 15,
    borderColor: '#000',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 3,

  },
  img:{
    width: 150,
    height: 150
  },
  name:{
    fontSize: 16
  },
  price:{
    color: '#FE2F20'
  },
});
