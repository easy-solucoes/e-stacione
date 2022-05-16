import { StyleSheet  } from 'react-native';
import { values } from '../../global/constantValues/values';
import { constantStyles } from '../../global/constantStyles/styles';

export const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: constantStyles.colors.themeColorTwo,
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
          borderBottomStartRadius: 400,
          overflow: 'hidden'
          
     },
     writtenArea: {
          flex: 1,
          backgroundColor: constantStyles.colors.themeColorTwo,
     },
     contentContainer: {
          height: 'auto',
          width: values.screenWidth,
          
     },
     contentTextContainer: {
          width: values.screenWidth
     },
     text: {
          fontSize: 25,
          marginLeft: 15,
          color: '#FFF'
     },
     textTitle: {
          fontSize: 43,
          marginLeft: 15,
          color: '#FFF',
          fontWeight: 'bold'
     },
     button: {
          marginBottom: 'auto',
          marginLeft: 'auto',
          marginTop: 'auto',
          marginRight: 'auto'
     }
})