import React, { useState } from 'react';
import { styles } from './styles';

import { View, TextInput, Image, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';
import { BigButton } from '../../components/bigButton';
import { LittleButton } from '../../components/littleButton';

import firebase from '../../firebaseConnection'

export function Register(){
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [typeOfUser, setTypeOfUser] = useState('0');

     console.log(email)
     
     async function createUser(){
          await firebase.auth().createUserWithEmailAndPassword(email,password)
          .then((value) => {
               console.log("Resposta >>")
               console.log(value)
          })
          .catch((error) => {
               console.log("Erro >> ")
               console.log(error.code)
          })
     }

     return(
          <View style={styles.container}>
               <View>
                    <View style={styles.imageContainer}>
                         <Image 
                              source={require('../../../assets/LOGO2.jpg')}
                              style={styles.icon}
                         />
                    </View>
                    <Text style={styles.title}>
                         Cadastre-se
                    </Text>
                    <TextInput 
                         style={styles.textInput}
                         placeholder="Nome"
                    />
                    <TextInput 
                         style={styles.textInput}
                         placeholder="Email"
                         onChangeText={emailTyped => {
                              setEmail(emailTyped)
                         }}
                         value={email}/> 

                    <TextInput 
                         style={styles.textInput}
                         placeholder="Senha"
                         onChangeText={passwordTyped => {
                              setPassword(passwordTyped)
                         }}
                         value={password}/>
                    
                    <Picker 
                    style={styles.picker}
                    selectedValue={typeOfUser}
                    onValueChange={(selectedOption, selectedOptionIndex) => 
                         setTypeOfUser(selectedOption)
                    }> 

                         <Picker.Item label= "Selecionar" value='0'/>
                         <Picker.Item label="Idoso" value="Idoso"/>
                         <Picker.Item label="PCD" value="PCD"/>
                    
               
                    </Picker>
                    <View style={styles.buttonContainer}>
                         <BigButton title={"Registrar"}/>
                    </View>
                    
                    

               </View>
          </View>
     )
}