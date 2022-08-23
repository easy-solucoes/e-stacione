import React ,{useEffect} from 'react';
import { Text, ScrollView, View, Image, StatusBar } from 'react-native';
import { values } from '../../global/constantValues/values';
import { styles } from './styles';
import { BigButton } from '../../components/bigButton';
import firebase from '../../firebaseConnection'

export function WelcomeScreen(){
     useEffect(() => { 
          async function Dados(){
               await firebase.database().ref('nome').on('value', (snapshot) => {
                    console.log(snapshot.val()); //TODO: Este é só um teste do firebase
               })
          }
          Dados();
     }, [])
     
     return(
          
          <View style={styles.container}>
               
               <StatusBar 
               hidden={true}/>
               <View style={styles.borderRadiusOver}>
               <ScrollView 
                         style={styles.scrollViewContainer}
                         horizontal
                         pagingEnabled
                         showsHorizontalScrollIndicator={false}
               >
                         <View style={styles.contentContainer}>
                              <Image
                              source={require('../../../assets/LOGO2.jpg')} 
                                   style={{width: 350, height: 350, marginLeft: 'auto', marginRight: 'auto', marginTop: 'auto', marginBottom: 'auto'}}/>
                                        
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
                    <Text style={styles.textTitle}>
                         Bem-vindo(a)!
                    </Text>
                    <Text style={styles.text}>
                    Este é o E-stacione, o aplicativo de mobilidade desenvolvido por alunos do Inatel
                    </Text>
                    <View style={styles.button}>
                         <BigButton title={"Continuar"}/>
                    </View>
                    
               </View>
          </View>
     )
}
