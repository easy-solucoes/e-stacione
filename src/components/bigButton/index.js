import React from 'react';
import { Text , Pressable } from 'react-native';
import { styles } from './style';


export function BigButton(props){
     return(
          <Pressable style={styles.container}>
               <Text style={styles.title}>
                    { props.title }
               </Text>
          </Pressable>
     )
}