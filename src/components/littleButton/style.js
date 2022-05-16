import React from "react";
import { StyleSheet } from "react-native";
import { constantStyles } from "../../global/constantStyles/styles";
import { values } from "../../global/constantValues/values";
export const styles = StyleSheet.create({
     container: {
          backgroundColor: constantStyles.colors.themeColorTwo,
          width: values.littleButtonWidth,
          height: values.littleButtonHeight,
          borderRadius: 10,},
     title: {
          textAlign: 'center',
          color: 'white',
          marginTop: 'auto',
          marginBottom: 'auto'
     }
})