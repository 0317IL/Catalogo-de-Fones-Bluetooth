import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../../component/Dot'
import styles from './styles';

export default function Airdots({navigation}) {
  navigation.setOptions({
    headerTitle: 'Air Dots 3'
  })

 return (
   <ScrollView style={styles.container}>
        <Image
          source={{uri:'https://cdn.shopify.com/s/files/1/0458/0566/6469/products/01_58d013e6-e08c-43f9-bdc9-a06f336820a1_1024x1024.jpg?v=1631857147'}}
          style={styles.img}
        />

        <View style={styles.area}>
          <Text style={styles.name}>Air Dots 3</Text>
          <Text style={styles.price}>R$ 275,90</Text>
        </View>

        <View style={styles.dot}>
          <Text style={{fontSize: 16, color:'black', opacity: 0.6}}>Cores disponíveis:</Text>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="blue"/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="pink"/>
          </TouchableOpacity>
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
          <Text style={styles.txt}>
            Verdadeiro fone de ouvido sem fio bluetooth, bluetooth 5.2, conectado automaticamente, uso inteligente, controle de toque. 
            Bobina movente de alta frequência + baixa frequência, duas unidades de som de alta resolução trazem-lhe qualidade de som 
            equilibrada e completa. Chip Qualcomm 3040  com uma nova geração de tecnologia Bluetooth 5.2 para conexões mais rápidas e 
            mais estáveis. Atualização do controle de botão para controle de toque para desfrutar de várias funções. Tire os fones de 
            ouvido e a música pausa automaticamente; coloque os fones de ouvido e a música continua. Pesa apenas 4,6g cada fone. 
            Confortável de usar, livre para ajustar, não é fácil de cair. Bateria com duração de até 30 horas. Chamar assistente de voz, 
            controle de voz celular.
          </Text>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Ficha Técnina</Text>
        </View>
        <View style={styles.lineBottom}/>
        <View style={styles.areaTxt}>
          <Text style={styles.txt}>
            Bluetooth 5.2 {'\n'}
            Chip Qualcomm 3040{'\n'}
            HD aptX adaptável{'\n'}
            Tecnologia híbrida de alto-falante{'\n'}
            Duração da bateria(h): 30{'\n'}
            Bateria da case: 600mAh{'\n'}
          </Text>
        </View>
   </ScrollView>
  );
}

