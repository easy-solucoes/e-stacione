import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { values } from '../../global/constantValues/values'
import { constantStyles } from '../../global/constantStyles/styles';
export const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
     },
     mapa: {
          width: values.screenWidth,
          height: values.screenHeight,
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
     },
     placesContainer: {
          width: '100%',
          maxHeight: values.screenWidth/2
     },
     place: {
          width: values.screenWidth/1.2,
          maxHeight: values.screenWidth/2,
          backgroundColor: '#FFF',
          marginHorizontal: (values.screenWidth - values.screenWidth/1.2)/2 ,
          borderTopStartRadius: 35,
          borderTopEndRadius: 35,
          borderColor: constantStyles.colors.themeColorOne,
          borderWidth: 1,
          borderBottomStartRadius:0,
          borderBottomEndRadius: 0,
          alignContent: 'center'
     },
     parkingSpotTitle: {
          fontSize: 25, 
          marginLeft: 20,
          marginTop: 10,
          fontWeight: 'bold'
     },
     infoRowContainer: {
          flexDirection: 'row'
     },
     infoTitleText: {
          fontSize: 20,
          marginLeft: 20,
          marginTop: 10, 
          fontWeight: 'bold'
     }, 
     infoText: {
          fontSize: 20,
          marginLeft: 20,
          marginTop: 10
     }


})