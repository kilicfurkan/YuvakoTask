import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../Themes'

export default StyleSheet.create({
  headerContainer: {
    top: 0,
    height: 50,
    width: Metrics.screenWidth,
    backgroundColor: Colors.grey.header,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  leftArea: {
    alignSelf: 'center',
  },
  rightArea: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Metrics.screenWidth / 3
  }
});
