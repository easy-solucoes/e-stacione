import React from "react";
import { StyleSheet } from "react-native";
import { constantStyles } from "../../global/constantStyles/styles";
import { values } from "../../global/constantValues/values";
export const styles = StyleSheet.create({
     container: {
          backgroundColor: constantStyles.colors.themeColorOne,
          width: values.bigButtonWidth,
          height: values.bigButtonHeight,
          borderRadius: 16,
          textAlign: 'center',
     },
     title: {
          textAlign: 'center',
          marginTop: 'auto',
          marginBottom: 'auto',
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: 17
     }
})