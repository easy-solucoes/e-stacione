import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function SelectLogin(){

     return (
          <View style={styles.container}>
               <View style={styles.imageContainer}>
                    

               </View>
               <View style={styles.contentContainer}>
                    <View style={styles.actionsContainer}>
                         <Text>
                              Boas vindas ao Park!
                         </Text>
                         <Text>
                              Já utiliza as vagas especiais?
                         </Text>

                    </View>
                    <View>

                    </View>
                    <View style={styles.registerContainer}>

                    </View>

               </View>
               
          </View>
     );
}