import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles'

export default function Bluetooth({navigation}){
  navigation.setOptions({
    headerTitle: ''
  })
 return (
   <ScrollView style={styles.container}>
    
    <View style={styles.areaTitle}>
      <FontAwesome name="circle" size={12} color="black" style={{marginRight: 5}}/>
      <Text style={styles.title}>O que é o Bluetooth? </Text>
    </View>
    <View style={styles.lineBottom}/> 

    <View style={{alignItems: 'center'}}>
        <Image 
        source={{uri: 'https://s2.glbimg.com/xREAsoZIeGv8sVjIGUt2U_St-vw=/0x0:300x312/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/f/M/LxdDJBTi2x9gCwhsqX0g/2012-01-24-bluetooth.jpg'}} 
        style={styles.img}
        />
    </View>

    
    <View style={styles.areatxt}>
      <Text style={styles.txt}>
        O Bluetooth é uma tecnologia de comunicação sem fio desenvolvida pela empresa de telecomunicações 
        Ericsson, em 1994. Ela permite a troca de dados e arquivos entre celulares, computadores, scanners,
        fones de ouvido e demais dispositivos de forma rápida e segura. {'\n'}
        {'\n'}
        A tecnologia foi batizada Bluetooth em homenagem a um antigo rei da Dinamarca e da Noruega, 
        Harold Blatand (em inglês, Harold Bluetooth). O nome foi utilizado pela sua façanha de ter 
        unificado as tribos norueguesas, suecas e dinamarquesas, já que a tecnologia é justamente uma 
        forma de unificação de diferentes dispositivos. O logotipo e símbolo do Bluetooth também é 
        baseado no nome de Harold, já que é formado pela união das runas nórdicas Hagall e Berkanan, 
        correspondentes às iniciais do nome do rei, “H” e “B”, respectivamente.
      </Text>
      
    </View>

    <View style={styles.lineTop}/>
    <View style={styles.areaTitle}>
      <FontAwesome name="circle" size={12} color="black" style={{marginRight: 5}}/>
      <Text style={styles.title}>Como funciona o Bluetooth?</Text>
    </View>
    <View style={styles.lineBottom}/> 

    <View style={styles.areatxt}>
      <Text style={styles.txt}>
        O sistema utiliza uma freqüência de rádio de onda curta (2.4 GHz) para criar uma comunicação 
        entre aparelhos habilitados. Como seu alcance é curto e só permite a comunicação entre 
        dispositivos próximos, seu consumo de energia é bem baixo.{'\n'}
        {'\n'}
        A comunicação do Bluetooth se dá através de uma rede chamada piconet, que só permite a conexão 
        de até oito dispositivos. Porém, para aumentar essa quantidade, é possível sobrepor mais 
        piconets, capacitando o aumento de conexões pelo método chamado de scatternet.{'\n'}
        {'\n'}
        Embora já existam classes de Bluetooth com alcance de 100 metros, a maioria dos dispositivos 
        conta com alcance de 1 a 10 metros, o que, embora seja uma desvantagem, ajuda na segurança dos 
        usuários. Outra garantia de ambiente seguro é que, antes de efetuar trocas de dados e arquivos 
        entre aparelhos que dispõem do Bluetooth, normalmente deve-se ativar a função através das 
        configurações dos dispositivos.{'\n'}
        {'\n'}
        Fonte: https://www.techtudo.com.br/noticias/2012/01/bluetooth-o-que-e-e-como-funciona.ghtml
      </Text>
      
    </View>
   </ScrollView>
  );
}
