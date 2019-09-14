import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../Themes'

export default StyleSheet.create({
  profileContainer: {
    top: 0,
    width: Metrics.screenWidth,
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  infoContainer: {
    flex: 3
  },
  numericalInfoContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonsContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
