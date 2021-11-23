import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import Products from '../../component/Products';
import styles from './styles';

export default function Home(){
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.area}>
            <View style={styles.txtContainer}>
              <Text style={styles.txt}>Tecnologia Bluetooth</Text>
            </View>

          <View style={styles.line}/>

        

          <View style={styles.description}>
            <View style={{alignItems: 'center'}}>
              <Image
                  source={{uri: 'https://s2.glbimg.com/xREAsoZIeGv8sVjIGUt2U_St-vw=/0x0:300x312/640x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/f/M/LxdDJBTi2x9gCwhsqX0g/2012-01-24-bluetooth.jpg'}}
                  style={styles.logo}
              />
              
              <Text style={styles.txtDescription}>
                O Bluetooth é uma tecnologia de comunicação sem fio desenvolvida pela empresa de comunicação Ericsson, em 1994. 
                Ela permite a troca de dados e arquivos entre celulares, computadores, scanners, fones de ouvido e demais 
                dispositivos de forma rápida e segura. [...]
              </Text>
            </View>


            <View style={{alignItems: 'flex-end', marginTop: 10}}>
              <TouchableOpacity style={styles.buttom} onPress={() => navigation.navigate('Bluetooth')}>
                <Text style={{color: 'white', fontSize: 15}}>Leia mais</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        

        <View>
          <View style={{marginTop: 20, borderTopColor: '#D8d8d8', borderTopWidth: 2, marginBottom: 5, opacity: 0.4}}/>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>Fones Bluetooth</Text>
            
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons 
                name="filter-list"
                size={24}
                color="#000"
              />                  
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}/>
        
          <View style={{marginBottom: 30}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Products 
              img={'https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw7f034c80/JBL_LIVE400BT_Product-Photo_Hero_Black-1605x1605px.png?sw=537&sfrm=png'} 
              name={'JBL LIVE 400BT'} 
              price={'R$ 399,00'} 
              onClick={() => navigation.navigate('Live')}/>

            <Products
              img={'https://www.jbl.com.br/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwa3a01d09/JBL_TUNE_125TWS_Hero%201_Black.png?sw=537&sfrm=png'} 
              name={'JBL Tune 125TWS'} 
              price={'R$ 499,00'} 
              onClick={() => navigation.navigate('Tune')}/>             
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Products
              img={'https://m.media-amazon.com/images/I/71zny7BTRlL._AC_SL1500_.jpg'} 
              name={'Apple AirPods Pro'} 
              price={'R$1.564,00'} 
              onClick={() => navigation.navigate('Airpods')}/>

            <Products
              img={'https://cdn.shopify.com/s/files/1/0458/0566/6469/products/01_58d013e6-e08c-43f9-bdc9-a06f336820a1_1024x1024.jpg?v=1631857147'} 
              name={'Air Dots 3'} 
              price={'R$ 275,90'} 
              onClick={() => navigation.navigate('AirDots')}/>             
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Products
              img={'https://cdn.shopify.com/s/files/1/0249/2825/6109/products/t13-1_1500x1500.jpg?v=1631459556'} 
              name={'T13'} 
              price={'R$125,99'} 
              onClick={() => navigation.navigate('T13')}/>

            <Products
              img={'https://images-americanas.b2w.io/produtos/01/00/img/2638610/1/2638610107_5SZ.jpg'} 
              name={'Galaxy Buds Pro'} 
              price={'R$ 748,80'} 
              onClick={() => navigation.navigate('Buds')}/>             
            </View>
                      
          </View>            
        </ScrollView>
      </SafeAreaView>
    );
}
