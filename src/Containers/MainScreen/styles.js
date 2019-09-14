import { StyleSheet, StatusBar } from 'react-native';
import { Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.screenHeight === 812 ? 0 : StatusBar.currentHeight
  },
  scrollViewContainer: {
  },
  statusBarBackgroundColor: {
    backgroundColor: Colors.grey.header
  }
});