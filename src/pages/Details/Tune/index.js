import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../../component/Dot'
import styles from './styles';

export default function Tune({navigation}) {
  navigation.setOptions({
    headerTitle: 'JBL Tune 125TWS'
  })
  
 return (
   <ScrollView style={styles.container}>
        <Image
          source={{uri:'https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa3a01d09/JBL_TUNE_125TWS_Hero%201_Black.png?sw=537&sfrm=png'}}
          style={styles.img}
        />

        <View style={styles.area}>
          <Text style={styles.name}>JBL Tune 125TWS</Text>
          <Text style={styles.price}>R$ 499,00</Text>
        </View>

        <View style={styles.dot}>
          <Text style={{fontSize: 16, color:'black', opacity: 0.6}}>Cores disponíveis:</Text>
          <TouchableOpacity style={{marginLeft: 10}}>
            <Dot color="black"/>
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
          Envolva-se no seu mundo. Você pode ouvir suas músicas e chamadas telefônicas sem se preocupar com fios pendurados. Use os fones de ouvido JBL TUNE 125TWS e comece a sentir o som, já que eles se conectam imediatamente a seu dispositivo assim que saem do estojo. Com o Dual Connect, você pode usar um ou os dois fones quando quiser. Suas músicas favoritas ficam ainda melhores com o JBL Pure Bass. Com até 32 horas de duração de bateria e ajuste confortável, sua música continua tocando durante o dia todo. Escolha sua opção preferida na incrível paleta de cores e encontre os fones totalmente sem fios perfeitos para o seu estilo próprio.
          </Text>
        </View>

        <View style={styles.lineTop}/>
        <View style={styles.areaTitle}>
          <Text style={styles.title}>Ficha Técnina</Text>
        </View>
        <View style={styles.lineBottom}/>
        <View style={styles.areaTxt}>
          <Text style={styles.txt}>
            Versão do Bluetooth:   5.0 {'\n'}
            Material do adaptador para ouvidos:   Silicon{'\n'}
            Driver (mm):   5.8{'\n'}
            Sensibilidade do Driver a 1kHz1mW (dB):   96
            Resposta de Frequência Dinâmica:   20 Hz – 20 kHz{'\n'}
            Impedância de entrada (ohms):   14{'\n'}
            Número de drivers por ouvido:  1{'\n'}
            Perfis bluetooth:   A2DP 1.3, AVRCP 1.5, HFP V1.7{'\n'}
            Faixa de frequência do emissor bluetooth:   2.402 GHz – 2.480 GHz{'\n'}
            GFSK de modulação do emissor bluetooth:   GFSK, π/4DQPSK, 8DPSK{'\n'}
            Potência de emissão de bluetooth:  0 - 12dbm{'\n'}
            Tempo de carregamento (h):   2{'\n'}
            Tempo máximo de jogo (horas):   8
          </Text>
        </View>
   </ScrollView>
  );
}

