import React, { useSTate } from 'react';
import { Text, View, Image, StatusBar} from 'react-native';
import { styles } from './styles';
import { BigButton } from '../../components/bigButton/'
import { LittleButton } from '../../components/littleButton'
import firebase from '../../firebaseConnection'

export function SelectLogin(){

     return (
          <View style={styles.container}>
               <StatusBar hidden={true}/>

               
               <Image
                    source={require('../../../assets/LOGO2.jpg')} 
                    style={styles.imageContainer}/>
                         

               
               <View style={styles.contentContainer}>
                    <View style={styles.actionsContainer}>
                         <Text style={styles.subtitle}>
                              Boas vindas ao E-stacione!
                         </Text>
                         <Text style={styles.subtitleTwo}>
                              Já utiliza as vagas especiais?
                         </Text>

                         <View style={styles.buttonContainer}>
                              <BigButton title={"Entrar"}/>
                         </View>
                         <View style={styles.buttonContainer}>
                              <LittleButton title={"Registrar"}/>
                         </View>
                         

                    </View>
                    <View>

                    </View>
                    <View style={styles.registerContainer}>

                    </View>

               </View>
               
          </View>
     );
}