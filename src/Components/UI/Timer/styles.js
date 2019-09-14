import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../Themes'

export default StyleSheet.create({
  timerContainer: {
    top: 0,
    height: 40,
    width: Metrics.screenWidth,
    justifyContent: 'center',
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.5
  },
  text: {
    textAlign: 'center',
    color: Colors.grey.medium
  }
});
