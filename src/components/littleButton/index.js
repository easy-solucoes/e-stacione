import React from 'react';
import { Text , Pressable } from 'react-native';
import { styles } from './style';


export function LittleButton(props){
     return(
          <Pressable style={styles.container}>
               <Text style={styles.title}>
                    { props.title }
               </Text>
          </Pressable>
     )
}