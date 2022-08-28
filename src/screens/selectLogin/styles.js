import { StyleSheet } from 'react-native';
import { values } from '../../global/constantValues/values'
import { constantStyles } from '../../global/constantStyles/styles'
export const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     imageContainer: {
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: values.screenHeight/20,
          borderRadius: 8,
          width: values.screenHeight/2,
          height: values.screenHeight/2,
     },
     contentContainer: {

     },
     actionsContainer: {

     },
     registerContainer: {
          
     },
     subtitle: {
          marginLeft: 'auto',
          marginRight: 'auto',
          fontSize: values.screenHeight/25,
          fontWeight: 'bold',
          color: constantStyles.colors.themeColorTwo
     },
     subtitleTwo: {
          marginLeft: 'auto',
          marginRight: 'auto',
          color: constantStyles.colors.themeColorOne,
          fontWeight: 'bold',
          marginTop: 12
     },
     buttonContainer: {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 10,
        marginTop: 10
     }
})