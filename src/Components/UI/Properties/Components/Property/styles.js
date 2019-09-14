import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../Themes'

export default StyleSheet.create({
  propertyContainer: {
    width: Metrics.screenWidth - 30,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.25
  },
});
