import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../../Themes'

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.blue,
    color: Colors.white,
    borderRadius: 5,
    height: 27
  },
  large: {
    width: Metrics.screenWidth / 2,
  },
  medium: {
    width: Metrics.screenWidth / 3,
  },
  small: {
    width: Metrics.screenWidth / 4,
  },
  title: {
    color: Colors.white,
    fontSize: Fonts.size.medium
  },
  icon: {
    color: Colors.blue,
    marginHorizontal: 5
  },
});
