import React, { useState } from 'react';
import { styles } from './styles';

import { View, TextInput } from 'react-native'

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
                   <TextInput 
                         placeholder="Nome"
                         
                    />
                   <TextInput 
                         placeholder="Email"/> 
               </View>
          </View>
     )
}