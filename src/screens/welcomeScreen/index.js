import React from 'react';
import { Text, ScrollView, View, Image} from 'react-native';
import { values } from '../../global/constantValues/values';
import { styles } from './styles';

export function WelcomeScreen(){

     return(
          <View style={styles.container}>
               <View style={styles.borderRadiusOver}>
               <ScrollView 
                         style={styles.scrollViewContainer}
                         horizontal
                         pagingEnabled
                         showsHorizontalScrollIndicator={false}
               >
                         <View style={styles.contentContainer}>
                              <Image
                              source={require('../../../assets/mapsExample.png')} 
                                   style={styles.contentTextContainer}/>
                                        
                         </View>
                         <View style={styles.contentContainer}>
                              <Text style={styles.contentTextContainer}>
                                   fafsdfa
                              </Text>
                              <Text style={styles.contentTextContainer}>
                                   fafsdfa
                              </Text>
                         </View>
                         
                    </ScrollView>
               </View>
               <View style={styles.writtenArea}>
                    <Text style={styles.text}>
                         Bem-vindo(a)!
                    </Text>
                    <Text style={{fontSize: 20, marginLeft: 15}}>
                    Boas vindas ao Aplicativo de mobilidade teste do Inatel
                    </Text>
               </View>
          </View>
     )
}
