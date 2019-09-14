import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'

const platform = Platform.OS

export default StyleSheet.create({
  activitiesContainer: {
    height: Metrics.screenHeight === 812 ? 
      Metrics.screenHeight - 225 : 
      Metrics.screenHeight - 150 + (platform === 'ios' ? 0 : StatusBar.currentHeight),
  },
  scrollViewContainer: {
    flex: 1,
    width: Metrics.screenWidth
  }
});
