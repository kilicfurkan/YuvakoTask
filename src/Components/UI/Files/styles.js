import { StyleSheet, StatusBar, Platform} from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'

const platform = Platform.OS

export default StyleSheet.create({
  filesContainer: {
    height: Metrics.screenHeight === 812 ? 
      Metrics.screenHeight - 225 : 
      Metrics.screenHeight - 150 + (platform === 'ios' ? 0 : StatusBar.currentHeight),
    alignItems: 'center',
    flex: 1
  },
  button: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingVertical: 0,
    paddingTop: 20,
    maxHeight: 40
  },
  scrollViewContainer: {
    flex: 1,
    width: Metrics.screenWidth
  }
});
