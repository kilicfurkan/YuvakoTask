import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../../../Themes'

export default StyleSheet.create({
  propertyDetailContainer: {
    width: Metrics.screenWidth - 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.25,
    flexDirection: 'column'
  }
});
