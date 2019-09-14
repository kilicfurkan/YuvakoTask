import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../Themes'

export default StyleSheet.create({
  tabBarContainer: {
    height: 50,
    width: Metrics.screenWidth,
    justifyContent: 'center',
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.5,
    flexDirection: 'row'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
