import { Dimensions } from 'react-native';

export const values = {
     screenWidth: Dimensions.get('screen').width,
     screenHeight: Dimensions.get('screen').height,
     bigButtonWidth: Dimensions.get('screen').width/2,
     bigButtonHeight: Dimensions.get('screen').height/17,
     littleButtonWidth: Dimensions.get('screen').width/2.4,
     littleButtonHeight: Dimensions.get('screen').height/20,
}