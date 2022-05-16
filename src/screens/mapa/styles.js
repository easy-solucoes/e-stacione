import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
     mapa: {
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
     }

})