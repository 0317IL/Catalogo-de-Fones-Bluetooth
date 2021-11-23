import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../../component/Dot'
import styles from './styles';

export default function Live({navigation}) {
  navigation.setOptions({
    headerTitle: 'JBL LIVE 400BT'
  })
  
 return (
   <ScrollView style={styles.container}>
        <Image
          source={{uri:'https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw7f034c80/JBL_LIVE400BT_Product-Photo_Hero_Black-1605x1605px.png?sw=537&sfrm=png'}}
          style={styles.img}
        />

        <View style={styles.area}>
          <Text style={styles.name}>JBL LIVE 400BT</Text>
          <Text style={styles.price}>R$ 399,00</Text>
        </View>

        <View style={styles.dot}>
          <Text style={{fontSize: 16, color:'black', opacity: 0.6}}>Cores disponíveis:</Text>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="black"/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="white"/>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="red"/>
          </TouchableOpacity>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Descrição</Text>
        </View>
        <View style={styles.lineBottom}/>

        <View style={styles.areaTxt}>
          <Text style={styles.txt}>
            Em seu mundo, um som superior é essencial, portanto, use um par de fones de ouvido on-ear sem fio JBL LIVE400BT. 
            Equipados com potentes drivers de 40 mm, os fones de ouvido JBL LIVE400BT oferecem som com assinatura da JBL pontuado 
            com reforço dinâmico de graves para todas as faixas de reprodução em qualquer lista de músicas pop. Precisa de ajuda 
            para passar o dia? Acesse facilmente o Google Assistente ou o Amazon Alexa com um toque na parte externa do fone e 
            ouça a sua lista de músicas favorita, envie mensagens de texto para seus amigos, verifique a previsão do tempo e muito 
            mais, sem nem olhar para o seu telefone. Mas isso não é tudo. Os fones de ouvido JBL LIVE400BT também podem manter 
            você em contato com o seu ambiente graças à função Ambient Aware e pela tecnologia TalkThru permitindo que você tenha 
            uma conversa sem retirar os fones de ouvido. Com um design leve e confortável, você vai desfrutar de uma haste macia 
            para a cabeça, e apreciará até 24 horas de streaming de música com duas horas de tempo de recarga, funções de conexão 
            multiponto e um prático cabo destacável com controle remoto/microfone, que lhe permite ouvir música mesmo quando 
            termina a carga da bateria. Ouça rock enquanto fica sintonizado com os fones de ouvido JBL LIVE400BT.
          </Text>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Ficha Técnina</Text>
        </View>
        <View style={styles.lineBottom}/>
        <View style={styles.areaTxt}>
          <Text style={styles.txt}>
            Versão do Bluetooth:  4.2 {'\n'}
            Material da almofada auricular:   PU Leather{'\n'}
            Comprimento do cabo do fone de ouvido (pés):  4.38{'\n'}
            Driver (mm):   40.0{'\n'}
            Perfis bluetooth:   A2DP V1.3, AVRCP V1.5, HSP V1.2{'\n'}
            Faixa de frequência do emissor bluetooth:   2.402 – 2.480GHz{'\n'}
            GFSK de modulação do emissor bluetooth:  GFSK, π/4 DQPSK, 8DPSK{'\n'}
            Potência de emissão de bluetooth:   0-4 dbm{'\n'}
            Tempo de carregamento (h):   2.0{'\n'}
            Tempo máximo de reprodução de música com ANC desligado (h):   24.0{'\n'}
            Tempo máximo de jogo (h):   24.0{'\n'}
            Tempo de fala (h): 24.0  
          </Text>
        </View>
   </ScrollView>
  );
}
