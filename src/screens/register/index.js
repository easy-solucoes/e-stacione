import React, { useState } from 'react';
import { styles } from './styles';

import { View, TextInput, Image, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import firebase from '../../firebaseConnection'

export function Register(){
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

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
                         placeholder="Email"/> 
                    <TextInput 
                         style={styles.textInput}
                         placeholder="Senha"/>
               </View>
          </View>
     )
}