import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../../component/Dot'
import styles from './styles';

export default function Buds({navigation}) {
  navigation.setOptions({
    headerTitle: 'JBL LIVE 400BT'
  })
  
 return (
   <ScrollView style={styles.container}>
        <Image
          source={{uri:'https://images-americanas.b2w.io/produtos/01/00/img/2638610/1/2638610107_5SZ.jpg'}}
          style={styles.img}
        />

        <View style={styles.area}>
          <Text style={styles.name}>Samsung Galaxy Buds Pro</Text>
          <Text style={styles.price}>R$ 748,80</Text>
        </View>

        <View style={styles.dot}>
          <Text style={{fontSize: 16, color:'black', opacity: 0.6}}>Cores disponíveis:</Text>
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
          <Text style={styles.txt}>O cancelamento de ruído ativo no Galaxy Buds Pro filtra até 99% do ruído de fundo. Os microfones 
            internos e externos monitoram o ruído em tempo real. Escolha o nível do ANC com um algoritmo inteligente que cancela o 
            ruído: aumente para usá-lo dentro do ônibus barulhento ou diminua para usá-lo em uma biblioteca calma.
          </Text>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Ficha Técnina</Text>
        </View>
        <View style={styles.lineBottom}/>
        <View style={styles.areaTxt}>
          <Text style={styles.txt}>
            Recursos/Funcionalidades: Cancelamento de Ruído, Alto-falantes duplos, três Microfones e carreamento rápido. {'\n'}
            Conteúdo da embalagem:	Fones de ouvido, Estojo carregador, Cabo USB Tipo C, Adaptadores auriculares e Guia de uso rápido.{'\n'}
            Dimensões Produto - cm (AxLxP):  Dimensões do Fone (mm) - 16.5(W)x 27.3(H)x14.9(D) mm.{'\n'}
            Dimensões do Estojo: 50(W)x50.2(H)x27.8(D) mm.{'\n'}
            Dimensões Embalagem - cm (AxLxP):   9.5x8.6x4cm.{'\n'}
            Mais informações:	Acelerômetro, Infra Red, Ambiente, Toque, Unidade de captação de Voz.{'\n'}
            Referência do Modelo:	SM-R190.
          </Text>
        </View>
   </ScrollView>
  );
}
