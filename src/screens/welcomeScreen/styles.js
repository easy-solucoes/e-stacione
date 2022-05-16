import { StyleSheet  } from 'react-native';
import { values } from '../../global/constantValues/values';
import { constantStyles } from '../../global/constantStyles/styles';

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: constantStyles.colors.themeColorOne,
     },
     scrollViewContainer: {
          overflow: 'hidden',
          position: 'relative',
          flexDirection: 'row',
          width: values.screenWidth
     },
     borderRadiusOver: {
          backgroundColor: 'white',
          height: 400,
          width: 750,
          borderBottomStartRadius: 300,
          overflow: 'hidden'
          
     },
     writtenArea: {
          flex: 1,
          backgroundColor: constantStyles.colors.themeColorOne,
     },
     contentContainer: {
          height: 'auto',
          width: values.screenWidth,
          borderColor: 'yellow',
          borderWidth: 2,
          
     },
     contentTextContainer: {
          width: values.screenWidth
     },
     text: {
          fontSize: 40,
          marginLeft: 15
     }
})