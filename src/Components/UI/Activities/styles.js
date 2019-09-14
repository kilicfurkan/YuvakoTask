import { StyleSheet, StatusBar, Platform } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'

const platform = Platform.OS

export default StyleSheet.create({
  activitiesContainer: {
    height: Metrics.screenHeight === 812 ? 
      Metrics.screenHeight - 225 : 
      Metrics.screenHeight - 150 + (platform === 'ios' ? 0 : StatusBar.currentHeight),
    paddingVertical:  Metrics.screenHeight === 812 ? 75 : 0,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: Fonts.size.h4,
    color: Colors.grey.dark,
    fontWeight: '500'
  },
  explanation: {
    maxWidth: Metrics.screenWidth / 1.2,
    textAlign: 'center',
    color: Colors.grey.medium
  },
  button: {
    borderTopColor: Colors.grey.light,
    borderTopWidth: 0.25,
    width: Metrics.screenWidth
  },
  lastButton: {
    borderBottomColor: Colors.grey.light,
    borderBottomWidth: 0.25,
  }
});
