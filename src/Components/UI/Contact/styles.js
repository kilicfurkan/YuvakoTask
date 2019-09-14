import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'

export default StyleSheet.create({
  contactContainer: {
    height: 50,
    width: Metrics.screenWidth,
    flexDirection: 'row',
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.25,
    borderTopColor: Colors.grey.light,
    borderTopWidth: 0.25
  }
});
