import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../../component/Dot'
import styles from './styles';

export default function T13({navigation}) {
  navigation.setOptions({
    headerTitle: 'QCY T13'
  })
  
 return (
   <ScrollView style={styles.container}>
        <Image
          source={{uri:'https://cdn.shopify.com/s/files/1/0249/2825/6109/products/t13-1_1500x1500.jpg?v=1631459556'}}
          style={styles.img}
        />

        <View style={styles.area}>
          <Text style={styles.name}>QCY T13</Text>
          <Text style={styles.price}>R$125,99</Text>
        </View>

        <View style={styles.dot}>
          <Text style={{fontSize: 16, color:'black', opacity: 0.6}}>Cores disponíveis:</Text>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="white"/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="black"/>
          </TouchableOpacity>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Descrição</Text>
        </View>
        <View style={styles.lineBottom}/>

        <View style={styles.areaTxt}>
          <Text style={styles.txt}>
            Projetado para redefinir seu status. O T13® reúne o melhor do nosso premiado design, é sem sombra de dúvidas o fone 
            bluetooth mais bonito do planeta. {'\n'}
            {'\n'}
            Projetado para redefinir suas músicas. A qualidade musical está ainda mais surpreendente. Um alto-falante de 7.2mm que 
            ocupa 90% do seu espaço interno. É muito equipamento. Seu ouvido nunca ouviu nada assim.
          </Text>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Ficha Técnina</Text>
        </View>
        <View style={styles.lineBottom}/>
        <View style={styles.areaTxt}>
          <Text style={styles.txt}>
          Drive: 7.2mm{'\n'}
          4 microfones com cancelamento de ruído eletrônico{'\n'}
          Proteção contra água e poeira: IPX4{'\n'}
          Smart Touch{'\n'}
          Auto Pairing{'\n'}
          Bluetooth 5.1{'\n'}
          Quick Charger{'\n'}
          Portas USB-C{'\n'}
          Duração da bateria(h): 40
          </Text>
        </View>
   </ScrollView>
  );
}
