import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import Dot from '../../../component/Dot'
import styles from './styles';

export default function Live({navigation}) {
  navigation.setOptions({
    headerTitle: 'Apple AirPods Pro'
  })
  
 return (
   <ScrollView style={styles.container}>
        <Image
          source={{uri:'https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg'}}
          style={styles.img}
        />

        <View style={styles.area}>
          <Text style={styles.name}>Apple AirPods Pro</Text>
          <Text style={styles.price}>R$1.564,00</Text>
        </View>

        <View style={styles.dot}>
          <Text style={{fontSize: 16, color:'black', opacity: 0.6}}>Cores disponíveis:</Text>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="white"/>
            </TouchableOpacity>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Descrição</Text>
        </View>
        <View style={styles.lineBottom}/>

        <View style={styles.areaTxt}>
          <Text style={styles.txt}>blablab</Text>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Ficha Técnina</Text>
        </View>
        <View style={styles.lineBottom}/>
        <View style={styles.areaTxt}>
          <Text style={styles.txt}>
            Tipo: Headphone  {"\n"}
            Conexões: Bluetooth 5.0 {"\n"}
            Cancelamento Ativo de Ruído {"\n"}
            Modo Ambiente {"\n"}
            Equalização Adaptativa {"\n"}
            Equalização de pressão com sistema de ventilação {"\n"}
            Driver de alta amplitude {"\n"}
            Apple Amplificador com alto alcance dinâmico {"\n"}
            Dimensões e Peso Dimensões do AirPods (AxLxP): 30,9x21,8x24 mm (cada um) {"\n"}
            Dimensões do Estojo (AxLxP): 45x60,6x21,7 mm {"\n"}
            Dimensões do produto com embalagem (AxLxP): 45x100x100 mm {"\n"}
            Peso do AirPods: 0,05 kg {"\n"}
            Peso do Estojo: 0,045 kg {"\n"}
            Peso do produto com embalagem: 0,13 kg </Text>
        </View>
   </ScrollView>
  );
}

