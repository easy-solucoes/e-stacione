import React from 'react';
import { StyleSheet } from 'react-native';
import { values } from '../../global/constantValues/values'

export const styles = StyleSheet.create({
     container: {
          
     },
     imageContainer: {
          
     },
     icon: {
          marginLeft: 'auto',
          marginRight: 'auto',
          width: (values.screenHeight/3)*1.2,
          height: (values.screenHeight/3)*1.1,
          marginTop: 30
     },
     textInput: {
          marginLeft: 'auto',
          marginRight: 'auto',
          top: values.screenHeight/20,
          fontSize: 20,
          borderBottomWidth: 0.3,
          width: values.screenWidth/1.4,
          height: values.screenWidth/9, 
          paddingLeft: values.screenHeight/50
     },
     title: {
          fontSize: 30,
          marginLeft: 'auto',
          marginRight: 'auto',
     }
})